const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser');
const cors=require('cors')
const bcrypt=require('bcrypt');
const app=express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/project_admin',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const UserSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
});

const User=mongoose.model('User',UserSchema);

app.post('/api/Signup2',async(req,res)=>{
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

app.post('/api/Login2',async(req,res)=>{
    try{
        const { username, password}=req.body;
        const user=await User.findOne({username});
        if (!user){
            return res.status(401).json({error: 'User not Found.'});
        }

        const passwordMatch=await bcrypt.compare(password,user.password);

        if(!passwordMatch){
            return res.status(401).json({error:'Invalid Password'});
        }

        res.json({message:'Login successful'});
    }
    catch(error)
    {
        res.status(500).json({error:'An error Occurred'});
    }
});
const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});