import { Router } from "express";
import { db } from "../connect";
import { RowDataPacket } from "mysql2";

const router = Router();

router.get("/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  if (isNaN(userId)) return res.status(400).json({ error: "Invalid userId" });

  const sql = `
    SELECT cart.id, product_id, quantity, product.name, product.price, product.image
    FROM cart
    JOIN product ON cart.product_id = product.id
    WHERE user_id = ?
  `;
  db.query<RowDataPacket[]>(sql, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

router.post("/add", (req, res) => {
  const userId = parseInt(req.body.userId);
  const productId = parseInt(req.body.productId);
  const quantity = parseInt(req.body.quantity);

  if (!userId || !productId || !quantity)
    return res.status(400).json({ error: "Missing or invalid values" });

  const checkSql = "SELECT * FROM cart WHERE user_id = ? AND product_id = ?";
  db.query<RowDataPacket[]>(checkSql, [userId, productId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length > 0) {
      const updateSql = "UPDATE cart SET quantity = quantity + ? WHERE user_id = ? AND product_id = ?";
      db.query(updateSql, [quantity, userId, productId], (err2) => {
        if (err2) return res.status(500).json({ error: err2.message });
        res.json({ message: "Cart Updated" });
      });
    } 
    else {
      const insertSql = "INSERT INTO cart(user_id, product_id, quantity) VALUES(?, ?, ?)";
      db.query(insertSql, [userId, productId, quantity], (err2) => {
        if (err2) return res.status(500).json({ error: err2.message });
        res.json({ message: "Added to cart" });
      });
    }
  });
});

router.post("/remove", (req, res) => {
  const userId = parseInt(req.body.userId);
  const productId = parseInt(req.body.productId);

  if (!userId || !productId)
    return res.status(400).json({ error: "Missing or invalid values" });

  const sql = "DELETE FROM cart WHERE user_id = ? AND product_id = ?";
  db.query(sql, [userId, productId], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Removed from cart" });
  });
});

export default router;
