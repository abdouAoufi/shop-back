import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

const schema = new Schema({
    email: { type: Schema.Types.String, required: true },
    password: { type: Schema.Types.String, required: true },
});

export default model("User", schema);