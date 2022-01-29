import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import productRouter from "./routes/Product.js";

const app = express();
app.use(bodyParser.json());
app.use(productRouter);

mongoose.connect("mongodb://127.0.0.1:27017/shopdb").then(() => {
    app.listen(1337, () => console.log("Server started...."));
});