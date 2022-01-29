import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

const schema = new Schema({
  name: { type: Schema.Types.String },
  price: { type: Schema.Types.Number },
  description: { type: Schema.Types.String },
  discount: { type: Schema.Types.Number },
  imgUrl: { type: Schema.Types.String },
});

export default model("Product", schema);
