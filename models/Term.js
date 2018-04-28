import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TermSchema = new Schema({
  //Schema properties
  term: {
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
  related: {
    type: Array,
    default: undefined,
    required: true
  },
  tags: {
    type: Array,
    default: undefined,
    required: true
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

export default Term;
