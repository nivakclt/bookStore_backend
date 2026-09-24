const users = require("../Models/userModel")
const bcrypt=require("bcrypt")

//http://localhost:3000/register + POST + {data}

//registration
exports.userRegister=async (req,res)=>{
    console.log("inside from register controller")
    const {username,email,password}=req.body
    if(username && email && password){
        try{
            const existingUser=await users.findOne({email})
            if(existingUser){
                return res.status(400).json({"msg" :"User already exists"})
            }
            else{
                    const hashedPassword=await bcrypt.hash(password,10)                
                    const response=await users.create({username,email,password:hashedPassword})
                res.status(400).json(response)
            }
        }
        catch(err){
            console.log(err)
            res.status(400).json(err)
        }
    }
    res.status(201).json("POST HIT")
}
// login
exports.userLogin=(req,res)=>{
    res.status(200).json({"msg":"success"})
}

// profile edit
exports.profileEdit=(req,res)=>{
    res.status(200).json(" profile")
}