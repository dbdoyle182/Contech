import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  //Schema properties
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
  //Keep track of all posts associated with a given user
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

//Create the User model with mongoose.
const User = mongoose.model("User", UserSchema);

export default User;
