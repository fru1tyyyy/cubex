import { Router } from "express";
import { db } from "../connect";
import { RowDataPacket } from "mysql2";

const router = Router();

router.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password){
        return res.status(400).json({message: "All fields are required"});
    }

    const checkEmail = "SELECT * FROM user WHERE email = ?";
    db.query<RowDataPacket[]>(checkEmail, [email], (err, results) => {
        if (err){
            console.error("Database error:", err);
            return res.status(500).json({message: "Database error"});
        }

        if (results.length > 0){
            return res.status(400).json({message: "Email already exists"});
        }

        const sql = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
        db.query(sql, [name, email, password], (err2) => {
            if (err2){
                console.error("Insert error:", err2);
                return res.status(500).json({message: "Database insert error"});
            }
            res.json({message: "User registered successfully!"});
        });
    });
});

export default router;
