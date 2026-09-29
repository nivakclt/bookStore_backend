const jwt=require('jsonwebtoken')

const jwtMiddleware=(req,res,next)=>{
    try{
        console.log("Inside Middleware")
    const token=req.headers.authorization.split(" ")[1]
    const verifiedData=jwt.verify(token,process.env.SECRET_KEY)
    req.payload=verifiedData
    next()
    }
    catch(err){
        console.log(err)
        res.status(403).json(err)
    }}

module.exports=jwtMiddleware