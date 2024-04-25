const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const {sendEmail} = require("../utils/sendEmail");
const createToken = (_id)=>{
  return jwt.sign({_id},process.env.SECRET_KEY,{expiresIn:'3d'})
}
const register = async(req,res)=>{
  const {email,password} = req.body;
  try {    
    const user = await User.signUp(email,password);
    const token = createToken(user._id);
    const url = `http://localhost:3000/verify/${user.email}/${token}`
    await sendEmail({msg:url,email:email});
    res.status(200).json({msg:"Email Sent Successfully"});
  }
  catch(error)
  {
      res.status(400).json({error:error.message});
  }
}

const login = async (req,res)=>{
  const {email,password} = req.body;
  try {
    const user = await User.login(email,password);
    const token = createToken(user._id);
    res.status(200).json({email,token}); 
  }
  catch(error)
  {
    res.status(400).json({error:error.message});
  }
}

const verifyEmail = async(req,res)=>{
  const {email,token} = req.params;
  try {
    const {_id} = jwt.verify(token,process.env.SECRET_KEY)
    const user = await User.findOne({email,_id});
    if(!user)
      res.status(400).json({error:"Invalid Link"});
    else {
      await User.findOneAndUpdate({email:email},{verified:true});
      res.status(200).json({email,token});
    }
  }
  catch(error)
  {
    res.status(400).json({error:"Invalid Link"});
  }
}

module.exports = {register,login,verifyEmail};