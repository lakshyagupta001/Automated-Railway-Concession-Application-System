var express=require('express')
var router=express.Router()
var {allForm,particularStudentForm, archiveForm, allArchiveForm, archives}=require('../controllers/form')
const { authenticateUser } = require('../middleware/auth')

router.get('/forms',authenticateUser,allForm)
router.get('/:id',authenticateUser,particularStudentForm)
router.post('/archive', authenticateUser,archiveForm);
router.get('/all',authenticateUser,archives)

module.exports=router;
