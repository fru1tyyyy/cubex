import { Router, Request, Response } from "express";
import { db } from "../connect";

const router = Router();

router.get("/:productId", (req: Request, res: Response) => {
    const productId = Number(req.params.productId);
    db.query(`SELECT r.*, u.name AS userName, u.picture 
     FROM reviews r 
     JOIN user u ON r.user_id = u.id 
     WHERE product_id = ? 
     ORDER BY created_at DESC`,
    [productId], (err, results) => {
        if(err) return res.status(500).json({message: "Database Error"});
        res.json(results);
    });
});

router.post("/add", (req: Request, res: Response) => {
    const {userId, productId, comment} = req.body;
    if(!userId || !productId || !comment){
        return res.status(400).json({message: "Missing Fields"});
    }

    db.query("INSERT INTO reviews(user_id, product_id, comment) values(?, ?, ?)",
        [userId, productId, comment],
        (err) => {
            if(err) return res.status(500).json({message: "Database Error"});
            res.json({message: "Added successfully"});
        }
    );
});

export default router;
