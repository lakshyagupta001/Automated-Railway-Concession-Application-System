
var { getSingleStudent,adminLogin} =require('../controllers/a')
var archiveModal=require('../models/archive')
var adminModal=require('../models/admin')
var express = require('express');
const { authenticateUser } = require('../middleware/auth');
var router = express.Router();

router.get('/student/:id',getSingleStudent)
router.post('/login',adminLogin)





module.exports = router

//65bd379c5f4597d37afae7fc