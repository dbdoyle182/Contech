import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  //Schema properties
});

//Create the User model with mongoose.
const User = mongoose.model("User", UserSchema);

export default User;
