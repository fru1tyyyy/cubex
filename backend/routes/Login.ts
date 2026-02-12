import { Router } from "express";
import { db } from "../connect";
import { RowDataPacket } from "mysql2";
import bcrypt from "bcryptjs";

const router = Router();

router.post("/", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "SELECT * FROM user WHERE email = ?";
  db.query<RowDataPacket[]>(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });

    if (!results || results.length === 0) {
      return res.status(400).json({ message: "Email not found" });
    }

    const user = results[0] as any;

    try {
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res.status(400).json({ message: "Incorrect password" });
      }
      
      const { password: _, ...userWithoutPassword } = user;

      res.json({ message: "Login successful", user: userWithoutPassword });
    } catch (error) {
      console.error("Compare error:", error);
      res.status(500).json({ message: "Server error" });
    }
  });
});

export default router;
