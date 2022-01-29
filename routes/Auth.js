import { signUp, login } from "../controllers/Auth.js";
import { Router } from "express";
import { authValidation } from "../validation/Auth.js";

const authRouter = Router();

authRouter.post("/signup", authValidation, signUp);

authRouter.post("/login", authValidation, login);

export default authRouter;