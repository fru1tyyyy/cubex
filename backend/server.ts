import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import register from "./routes/Register";
import login from "./routes/Login";
import user from "./routes/User";
import product from "./routes/Product";
import review from "./routes/Review";
import cart from "./routes/Cart";
import contact from "./routes/Contact";
import checkout from "./routes/Checkout";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/user", user);
app.use("/api/product", product);
app.use("/api/review", review);
app.use("/api/cart", cart);
app.use("/api/contact", contact);
app.use("/api/checkout", checkout);
app.use("/upload", express.static("upload"));

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
