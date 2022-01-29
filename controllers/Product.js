import Product from "../models/Product.js";
import { validationResult } from "express-validator";

const createProduct = async(req, res, next) => {
    const validation = validationResult(req);
    if (!validation.isEmpty()) {
        return res.status(420).json({ message: validation.array()[0].msg });
    }
    const productInfo = req.body;
    console.log(productInfo)
    const product = new Product(productInfo);
    product.save();
    res.status(201).json({ product });
};

const updateProduct = async(req, res, next) => {
    const productID = req.body.productID;
    const updatedInfo = req.body.updatedInfo;
    const product = await Product.findByIdAndUpdate(productID, updatedInfo);
    if (product) {
        res.status(201).json({ message: product });
    }
};

export { createProduct, updateProduct };