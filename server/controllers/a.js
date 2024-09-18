const { sendTokenAsCookie } = require('../middleware/auth')
var adminModal=require('../models/admin')
var studentModal=require('../models/student')
var jwt=require('jsonwebtoken')

const adminLogin=async(req,res)=>
{
    const {username,password}=req.body
    console.log(req.body)
    let data=await adminModal.findOne({username})
    console.log(data)
    if(!data)
    {
        res.send({message:"user does not exist",success:false})
        console.log('user does not exist')
    }
    else
    {
        if(password==data.password)
        {      const token = jwt.sign({ userId: data._id }, process.env.secret_key, { expiresIn: '1h' });
        console.log(token)
        sendTokenAsCookie(res, token);
            res.send({message:"login sucessfull!",success:true})
            console.log('user logged in') 
        }
        else
        {
            res.send({message:"login failed!",success:false})
            console.log('user login failed')
        }
    }
}

const getSingleStudent=async (req ,res) => 
{
    let id= req.params.id;
    
    let data= await studentModal.findById(id);
   
    console.log("this is the student: " + data)
    if(!data)
    {
      return res.status(400).send({message:"Data is not found",success:false})
    }
    else
    {
      return res.send({data : data,success:true})
    }
}

module.exports={adminLogin,getSingleStudent}