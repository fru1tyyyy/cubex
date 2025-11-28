import { Router } from "express";
import { db } from "../connect";
import { RowDataPacket } from "mysql2";

const router = Router();

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).json({message: "all fields are required"});
    }

    const sql = "SELECT * FROM user WHERE email = ?";
    db.query<RowDataPacket[]>(sql, [email], (err, results) => {
        if(err) return res.status(500).json({message: "Database Error"});

        if(results.length === 0){
            return res.status(400).json({message: "Email Not found"});
        }
        
        const user = results[0]!;

        if(user.password !== password){
            return res.status(400).json({message: "incorrect password"});
        }

        res.json({message: "Login successfully!!", user});
    });
});

export default router;
