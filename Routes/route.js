const express=require('express')
const userController=require('../Controllers/userController')

const router = new express.Router()

router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)
router.post('/profile-edit',userController.profileEdit)


module.exports=router