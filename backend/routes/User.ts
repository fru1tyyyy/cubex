import { Router } from "express";
import { db } from "../connect";
import { RowDataPacket } from "mysql2";

const router = Router();

router.get("/:id", (req, res) => {
    const userId = req.params.id;

    const sql = "SELECT id, name, email FROM user WHERE id = ?";
    db.query<RowDataPacket[]>(sql, [userId], (err, results) => {
        if(err){
            console.error("Database Error", err);
            return res.status(500).json({message: "Database Error"});
        }

        if(results.length === 0){
            return res.status(400).json({message: "User not found"});
        }

        res.json(results[0]);
    });
});

router.get("/", (req, res) => {
    const sql = "SELECT id, name, email FROM user";
    db.query<RowDataPacket[]>(sql, (err, results) => {
        if(err){
            console.error("Database Error: ", err);
            return res.status(500).json({message: "Database Error"});
        }

        res.json(results);
    });
});

router.post("/", (req, res) => {
    const{name, email} = req.body;
    if(!name || !email){
        return res.status(400).json({message: "name and Email are required"});
    }

    const sql = "INSERT INTO user(name, email) values(?, ?)";
    db.query(sql, [name, email], (err, result) => {
        if(err){
            console.error("Database Error: ", err);
            return res.status(500).json({message: "Database Error"});
        }

        res.json({message: "User Added", id:(result as any).insertId});
    });
});

export default router;

