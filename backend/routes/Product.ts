import { Router } from "express";
import { db } from "../connect";
import { RowDataPacket, ResultSetHeader } from "mysql2";

const router = Router();

router.get("/", (req, res) => {
  const {category} = req.query;
  let sql = "SELECT * FROM product";
  const params: any[] = [];

  if(category){
    sql += " WHERE category = ?";
    params.push(category);
  }

  db.query<RowDataPacket[]>(sql, params, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

router.get("/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  if (isNaN(productId)) return res.status(400).json({error: "Invalid product ID"});

  const sql = "SELECT * FROM product WHERE id = ?";
  db.query<RowDataPacket[]>(sql, [productId], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({error: "Product not found"});
    res.json(result[0]);
  });
});

router.post("/", (req, res) => {
  const { name, price, image, description, category } = req.body;
  if (!name || !price || !image || !description || !category)
    return res.status(400).json({ error: "All fields required" });

  const sql = "INSERT INTO product (name, price, image, description, category) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [name, price, image, description, category], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    const insertResult = result as ResultSetHeader;
    res.json({ message: "Product Added", id: insertResult.insertId });
  });
});

router.delete("/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  if(isNaN(productId)) return res.status(400).json({error: "Invalid product ID"});

  const sql = "DELETE FROM product WHERE id = ?";
  db.query(sql, [productId], (err, result) => {
    if(err) return res.status(500).json({error: err.message});
    res.json({message: "Product Deleted"});
  });
});

router.put("/:id", (req, res) => {
  const productId = Number(req.params.id);
  const {name, price, image, description, category} = req.body;

  if(!name || !price || !image || !description || !category){
    return res.status(400).json({error: "All field are required"});
  }

  const sql = "UPDATE product SET name = ?, price = ?, image = ?, description = ?, category = ? WHERE id = ?";
  db.query(sql, [name, price, image, description, category, productId], (err, result) => {
    if(err){
      console.error("Update SQL Error: ", err);
      return res.status(500).json({error: err.message});
    }

    const updateResult = result as ResultSetHeader;
    if(updateResult.affectedRows === 0) return res.status(404).json({error: "Product not found"});
    res.json({message: "product updated"});
  });
});

export default router;
