const express=require('express')
const userController=require('../Controllers/userController')

const jwtMiddle=require('../Middlewares/jwtMiddleware')
const router = new express.Router()

router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)
router.get('/profile-edit',jwtMiddle,userController.profileEdit)


module.exports=router