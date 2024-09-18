var express = require('express');
var router = express.Router();
var studentModal=require('../models/student')
var formModal=require('../models/form');
var { allStudent, studentLogin, student, studentFormSubmission } = require('../controllers/student');
var jwt =require('jsonwebtoken');
const { authenticateUser } = require('../middleware/auth');
const { studentArchiveForm } = require('../controllers/form');


router.get('/all-student',authenticateUser,allStudent)

router.post('/student-login',studentLogin)

router.get('/student',authenticateUser,student)

router.post('/student-form', authenticateUser,studentFormSubmission);
router.get('/student-history',authenticateUser,studentArchiveForm)

  router.get('/logout',async(req,res)=>{
    const token=req.cookies.token
    if(!token)
    {
        console.log("error")
        res.status(500).json({message: "You are already logged out",success:false})
    }
    
    res.clearCookie('token');
    res.status(200).json({message:'Logged out successfully',success:true})
  })



module.exports=router