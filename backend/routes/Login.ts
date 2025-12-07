import { Router } from "express";
import { db } from "../connect";
import { RowDataPacket } from "mysql2";

const router = Router();

router.post("/", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "SELECT * FROM user WHERE email = ?";
  db.query<RowDataPacket[]>(sql, [email], (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });

    if (!results || results.length === 0) {
      return res.status(400).json({ message: "Email not found" });
    }

    const user = results[0]; 

    if (!user) {
      return res.status(500).json({ message: "User data corrupted" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    res.json({ message: "Login successful", user });
  });
});

export default router;
