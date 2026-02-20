import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.post("/send-email", async (req, res) => {
  const { username, email, complains } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "",         
        pass: "",             
      },
    });

    const mailOptions = {
      from: email,
      to: "", 
      subject: `New Contact Form: ${username}`,
      text: `Username: ${username}\nEmail: ${email}\n\nMessage:\n${complains}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

export default router;
