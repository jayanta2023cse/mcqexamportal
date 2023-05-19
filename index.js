require('dotenv').config()
const express = require("express");
const cors = require("cors");
require("./DB/config");
const QuestionModel = require("./DB/Question");
const User = require("./DB/User");

const app = express();
app.use(express.json());
app.use(cors());


app.get("/getquestion",async (req,resp) => {
   
   QuestionModel.find({},(err,res)=>{
      if(err) console.log(err);
      else resp.json(res)
   });
   
   // const questions = await QuestionModel.find();
   // if(questions.length > 0){
   //    resp.send(questions)
   // }else{
   //    resp.send("sorry Not able to find any questions")
   // }
})


// app.post("/register", async (req, resp) => {
//    let olduser = await User.findOne({email:req.body.email})
//    if(olduser){
//       return resp.send({error:"User Exists"});
//    }
//    let user = new User(req.body);
//    let result = await user.save();
//    result = result.toObject();
//    delete result.password;
//    resp.send(result);
// });

app.post("/login",async  (req, resp) => {
   
   // User.find({},(err,res)=>{
   //    if(err) console.log(err);
   //    else resp.json(res)
   // });

      let user = await User.findOne(req.body)
      console.log(user);
      
      // resp.status().send(user);
      if (user) {
         resp.status(200).json({
            success: true,
            message: "success",
            user: user,
        });
      }
      else{
         resp.status(401).json({
            success:false,
            message:"failure"
         });
      }
});



app.post("/add-product", async (req, resp) => {
   let product = new QuestionModel(req.body);
   let result = await product.save();
   resp.send(result);
});

// app.get("/products", async (req, resp) => {
//    const products = await Product.find();
//    if (products.length > 0) {
//       resp.send(products);
//    } else {
//       resp.send({ result: "No Product found" });
//    }
// });

// app.delete("/delete/:id", async (req, resp) => {
//    let result = await Product.deleteOne({ _id: req.params.id });
//    resp.send(result);
// });

// app.put("/decrease/:id", async (req, resp) => {
//    let result = await Product.updateOne(
//       { _id: req.params.id },
//       { $set: req.body }
//    );
//    resp.send(result);
// });

// app.get("/product/:id", async (req, resp) => {
//    let result = await Product.findOne({ _id: req.params.id });
//    if (result) {
//       resp.send(result);
//    } else {
//       resp.send({ result: "No Record Found." });
//    }
// });

// app.put("/product/:id", async (req, resp) => {
//    let result = await Product.updateOne(
//       { _id: req.params.id },
//       { $set: req.body }
//    );
//    resp.send(result);
// });

// app.get("/search/:key", async (req, resp) => {
//    let result = await Product.find({
//       $or: [
//          {
//             name: { $regex: req.params.key },
//          },
//          {
//             price: { $regex: req.params.key },
//          },
//          {
//             company: { $regex: req.params.key },
//          },
//          {
//             category: { $regex: req.params.key },
//          },
//       ],
//    });
//    resp.send(result);
// });

const PORT =process.env.PORT || 5000 ;
app.listen(PORT);
