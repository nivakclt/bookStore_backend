const express=require('express')
const userController=require('../Controllers/userController')

const jwtMiddle=require('../Middlewares/jwtMiddleware')

const multerMiddleware =require("../Middlewares/multerMiddleware")

const router = new express.Router()

router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)
router.post('/google-auth',userController.googleLogin)
router.put('/profile-edit/:id',jwtMiddle,multerMiddleware.single("picture"),userController.profileEdit)

module.exports=router