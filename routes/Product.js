import { Router } from "express";
import { createProduct, updateProduct, getProducts } from "../controllers/Product.js";
import { createVal } from "../validation/Product.js";

const producRouter = Router();

producRouter.post("/product", createVal, createProduct);
producRouter.get("/product", getProducts);

export default producRouter;