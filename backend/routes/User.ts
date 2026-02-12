import { Router } from "express";
import { db } from "../connect";
import { upload } from "../routes/Upload";  
import { RowDataPacket } from "mysql2";

const router = Router();

router.post("/upload/:id", upload.single("picture"), (req, res) => {
    const userId = req.params.id;

    if(!req.file){
        return res.status(400).json({message: "no file uploaded"});
    }

    const sql = "UPDATE user SET picture = ? WHERE id = ?";
    db.query(sql, [req.file.filename, userId], (err) => {
        if(err){
            console.error("database error", err);
            return res.status(500).json({message: "database error"});
        }

        res.json({message: "profile picture uploaded :D", picture: req.file?.filename,
        });
    })
})

router.get("/:id", (req, res) => {
    const userId = req.params.id;
    const sql = "SELECT id, name, email, picture FROM user WHERE id = ?";
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
    const sql = "SELECT id, name, email, picture FROM user";
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
