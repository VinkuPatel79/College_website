const express = require('express');
const mg = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const bcrypt=require('bcrypt');
app.use(cors());
app.use(bodyParser.json());
mg.connect('mongodb://127.0.0.1:27017/project_teacher') .then(()=>{console.log("Connection Success")})
const UserSchema = new mg.Schema({  name:String,password:String,email:String,phone:Number,gender:String,city:String
  });
const User = new mg.model('users', UserSchema);
app.post('/signup', async (req, res) => {
  try {
    const { username,pass,email,phone,gender,city} = req.body;
    const newUser = new User({ username,pass,email,phone,gender,city});
    await newUser.save();
    res.send();
  } catch (error) {
    res.send(error);
  }
});

app.post('/api/Signupa',async(req,res)=>{
  try{
      const {username,email,password}=req.body;
      const hashedPassword=await bcrypt.hash(password,10);
      const newUser = new User({username,email,password: hashedPassword});
      await newUser.save()
      res.status(201).json({message:'User signed up successfully.'});
  }
  catch(error){
      res.status(500).json({error:'An error Occurred'});
  }
});
app.listen(4300);
