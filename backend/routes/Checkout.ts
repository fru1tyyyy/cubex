import { Router, Request, Response } from "express";
import nodemailer from "nodemailer";
import { db } from "../connect";
import { RowDataPacket, ResultSetHeader } from "mysql2";

const router = Router();

router.post("/pay", async(req: Request, res: Response) => {
    const userId = parseInt(req.body.userId);
    if(!userId) return res.status(400).json({success: false, message: "Invalid UserId"});

    try{
        const [userRows] = await db.promise().query<RowDataPacket[]>(
            "SELECT name, email FROM user WHERE id = ?", [userId]
        );
        const user = userRows[0];
        if(!user) return res.status(404).json({success: false, message: "User not found"});

        const [cartItems] = await db.promise().query<RowDataPacket[]>(
            `SELECT c.product_id, c.quantity, p.name, p.price
             FROM cart c
             JOIN product p ON c.product_id = p.id
             WHERE c.user_id = ?`, [userId]
        );

        if(cartItems.length === 0) return res.status(400).json({success: false, message: "Cart is empty"});

        const totalAmount = cartItems.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);

        const [orderResult] = await db.promise().query<ResultSetHeader>(
            "INSERT INTO orders(user_id, total_amount) VALUES (?, ?)",
            [userId, totalAmount]
        );
        const orderId = orderResult.insertId;

        const orderItemsValues = cartItems.map(item => [orderId, item.product_id, item.quantity, item.price]);
        await db.promise().query(
            "INSERT INTO order_items(order_id, product_id, quantity, price) VALUES ?",
            [orderItemsValues]
        );

        await db.promise().query("DELETE FROM cart WHERE user_id = ?", [userId]);

        try{
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "cubex984@gmail.com", 
                    pass: "yyte zpqq iess ohmb", 
                },
            });

            await transporter.sendMail({
                from: "cubex984@gmail.com", 
                to: user.email,
                subject: "CubeX Order Confirmation",
                html: `<h1>Hi ${user.name},</h1>
                       <p>Your order has been successfully placed!</p>
                       <p>Order Details:<br>${cartItems.map(i => `${i.name} x${i.quantity} - RM${i.price * i.quantity}`).join("<br>")}</p>
                       <p>Total: RM${totalAmount}</p>`
            });
        } catch(err) {
            console.error("Email failed:", err);
        }

        res.json({success: true, message: "Order placed, cart cleared, email attempted!"});
    } catch(err) {
        console.error(err);
        res.status(500).json({success: false, message: "Something went wrong"});
    }
});

export default router;
