import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import productRouter from "./routes/Product.js";
import authRouter from "./routes/Auth.js";
import cors from "cors"

const app = express();
app.use(bodyParser.json());
app.use(productRouter);
app.use(authRouter);
app.use(cors);


mongoose.connect("mongodb://127.0.0.1:27017/shopdb").then(() => {
    app.listen(1337, () => console.log("Server started...."));
});