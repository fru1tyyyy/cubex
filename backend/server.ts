import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import register from "./routes/Register";
import login from "./routes/Login";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", register);
app.use("/api", login);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
