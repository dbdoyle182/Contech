const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

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

UserSchema.methods.comparePassword = function comparePassword(
  password,
  callback
) {
  bcrypt.compare(password, this.password, callback);
};

UserSchema.pre("save", function saveHook(next) {
  const user = this;

  if (!user.isModified("password")) return next();

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) {
      return next(saltError);
    }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) {
        return next(hashError);
      }

      user.password = hash;

      return next();
    });
  });
});

//Create the User model with mongoose.
const User = mongoose.model("User", UserSchema);

module.exports = User;
