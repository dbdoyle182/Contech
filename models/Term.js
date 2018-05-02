const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TermSchema = new Schema({
  //Schema properties
  word: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  definition: {
    type: String,
    required: true
  },
  tags1: {
    type: String
  },
  tags2: {
    type: String
  },
  related1: {
    type: String
  },
  related2: {
    type: String
  },
  //Any term can have an array of comments. Populate term with associated comments
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

//Create the Term model with mongoose.
const Term = mongoose.model("Term", TermSchema);

module.exports = Term;
