import { Router } from "express";
import { createProduct, updateProduct } from "../controllers/Product.js";
import { createVal } from "../validation/Product.js";

const producRouter = Router();

producRouter.post("/product", createVal, createProduct);

export default producRouter;