const express = require("express");
const app = express();
const mongoose = require("mongoose")
const UserModel = require("./models/users")
const cors = require("cors")

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:admin@cluster0.rnq53qg.mongodb.net/firstmernapp?retryWrites=true&w=majority")

// app.get("/getUsers", (req, res)=>{
//     UserModel.find({}, (err, result)=>{
//         if(err){
//             res.json(err);
//         }else{
//             res.json(result);
//         }
//     })
// })

app.get("/getUsers", async (req, res) => {
    const users = await UserModel.find();
    return res.status(200).json(users);
  });

app.post("/createUser", async (req,res)=>{
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
})

app.listen(3001, ()=>{
    console.log("server runs on port 3001")
})

