import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DailySchema = new Schema({
  //Schema properties
});

//Create the Daily model with mongoose.
const Daily = mongoose.model("Daily", DailySchema);

export default Daily;
