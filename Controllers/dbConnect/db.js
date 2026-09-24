const mongoose=require('mongoose')

const connection_string=process.env.CONNECTION_STRING

mongoose.connect(connection_string).then((res)=>{
console.log("Server Connected with MongoDB server")
}).catch((err)=>{
console.log("Mongodb Server Connection Failed!")
console.log(err)
})