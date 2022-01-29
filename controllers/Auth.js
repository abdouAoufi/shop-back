import User from "../models/User.js";
import { validationResult } from "express-validator";

const signUp = async(req, res, next) => {
    const validation = validationResult(req);
    if (!validation.isEmpty()) {
        return res.status(420).json({ message: validation.array()[0].msg });
    }
    const userInfo = req.body;
    const isFound = await User.findOne({ email: req.body.email }).exec();
    if (isFound) {
        return res.status(401).json({ message: "this email already exist" });
    }
    const user = new User(userInfo);

    await user.save();
    res.status(201).json({ message: "User created successfuly" });
};

const login = async(req, res, next) => {
    const validation = validationResult(req);
    if (!validation.isEmpty()) {
        return res.status(420).json({ message: validation.array()[0].msg });
    }
    const userInfo = req.body;
    const result = await User.findOne({ email: userInfo.email }).exec();
    if (!result) {
        res.status(404).json({ message: "user not found" });
    }
    console.log(result)
    if (result.password === req.body.password) {
        res.status(201).json({ message: "User logged successfuly" });
    } else {
        res.status(401).json({ message: "password non valid" });
    }
};

export { signUp, login };