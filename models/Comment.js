const mongoose = require("mongoose");
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
  },
  authorName: {
    type: String
  }
});

//Create the Comment model with mongoose.
const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
