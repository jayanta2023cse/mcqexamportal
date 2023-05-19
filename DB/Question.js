const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
      questionText:String,
      option1:String,
      option2:String,
      option3:String,
      option4:String,
      correctOption:String,
      userid:String,
});

module.exports = mongoose.model('questions',questionSchema);