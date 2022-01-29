import { body } from "express-validator";

const authValidation = [
    body("email", "Please enter valid email")
    .isString()
    .isEmail()
    .normalizeEmail(),
    body("password", "Please insert valid password")
    .isString()
    .isLength({ min: 8, max: 15 }),
];

export { authValidation };