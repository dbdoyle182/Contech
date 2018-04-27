import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TermSchema = new Schema({
  //Schema properties
});

//Create the Term model with mongoose.
const Term = mongoose.model("Term", TermSchema);

export default Term;
