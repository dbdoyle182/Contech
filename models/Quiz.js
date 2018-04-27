import mongoose from "mongoose";

const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  //Schema properties
});

//Create the Quiz model with mongoose.
const Quiz = mongoose.model("Quiz", QuizSchema);

export default Quiz;
