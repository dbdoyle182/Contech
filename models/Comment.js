import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  //Schema properties
  body: {
    type: String,
    required: true
  },
  //Every comment is associated with a term
  term: {
    type: Schema.Types.ObjectId,
    ref: "Term"
  },
  //Every comment has an author
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

//Create the Comment model with mongoose.
const Tag = mongoose.model("Comment", CommentSchema);

export default Comment;
