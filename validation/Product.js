import { body } from "express-validator";

const createVal = [
  body("name", "Invalid name product").isString().isLength({ min: 3, max: 20 }),
  body("price", "Invalid price product").isNumeric().trim(),
  body("description", "Invalid description")
    .isString()
    .isLength({ min: 4, max: 80 }),
  body("discount", "Invalid discount").isNumeric(),
  body("imgUrl", "Invalid image url").isURL().trim(),
];

export { createVal };
