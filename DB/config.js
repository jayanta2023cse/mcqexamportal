const mongoose = require("mongoose")

// const dbUrl = "mongodb://127.0.0.1:27017/mcq-exam-questions"

const dbUrl = process.env.DATABASE_URL
const connectionParams = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(dbUrl,connectionParams)
   .then(()=>{
      console.info("Connected to the Database");
   })
   .catch((e)=>{
      console.log("Error", e);
   });
