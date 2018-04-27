import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TagSchema = new Schema({
  //Schema properties
});

//Create the Tag model with mongoose.
const Tag = mongoose.model("Tag", TagSchema);

export default Tag;
