import { Router } from "express";
import { db } from "../connect";
import { RowDataPacket, ResultSetHeader } from "mysql2";

const router = Router();

router.get("/", (req, res) => {
    const sql = "SELECT * FROM product";
    db.query<RowDataPacket[]>(sql, (err, result) => {
        if(err) return res.status(500).json({error: err.message});
        res.json(result);
    })
})
router.post("/", (req, res) => {
    const {name, price, image, description, category} = req.body;
    if (!name || !price || !image || !description || !category){
        return res.status(400).json({error: "Must enter all values"});
    }
    const sql = "INSERT INTO product (name, price, image, description, category) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [name, price, image, description, category], (err, result) => {
        if(err) return res.status(500).json({error: err.message});
        const insertResult = result as ResultSetHeader;
        res.json({message: "Product Added", id: insertResult.insertId});
    });
});

router.get("/:id", (req, res) => {
    const sql = "SELECT * FROM product WHERE id = ?";
    db.query<RowDataPacket[]>(sql, [req.params.id], (err, result) => {
        if(err) return res.status(500).json({ error: err.message });
        if(result.length === 0){
            return res.status(404).json({ error: "Product not found" });
        }
        res.json(result[0]);
    });
});

export default router;
