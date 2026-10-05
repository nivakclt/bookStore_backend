// loads dotenv file contents into process env by default
require('dotenv').config()

const express=require('express')
const cors=require('cors')
const router = require('./Routes/route')
require('./Controllers/dbConnect/db')
const jwtmiddleware=require('./Middlewares/jwtMiddleware')
// craeting server instance
const server=express()

// configuring the static folder to serve static files like images,css,js etc
server.use('/uploads',express.static('uploads'))

// enabling cors in server
server.use(cors())

// enabling json middleware
server.use(express.json())

// configuring router
server.use(router)

// setting up a port number
const port=process.env.PORT

// start server to listen client request to that port / available server in internet
server.listen(port,()=>{
    console.log(`Server Started at ${port} & waiting for client requests`)
})

// handling global errrors using application level middleware
server.use((err,req,res,next)=>{
    res.status(500).json(err)
})


// // resolving api(http://localhost:3000) using express
// server.get('/',(req,res)=>{
//     res.send["<h1>server is running waiting for client request</h1>"]
// })

// // resolving api(http://localhost:3000/addbook post request) using express
// server.post('/addbook',(req,res)=>{
//     res.send("POST HIT")
// })

// server.get('/getbook',(req,res)=>{
//     res.status(201).json({"title":"addjevitham","price":120,"author":"benyamin"})
// })

// server.delete('/deletebook',(req,res)=>{
//     res.status(200).json({"msg":"deleted"})
// })