const mongose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    uploadedImages:{
        type:Array,
        required:true

    },
    noOfPages:{
        type:Number,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discountPrice:{
        type:Number,
        required:true
    },
    abstract:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    isbm:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    sellerMail:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"pending"
    },
    buyerMail:{
        type:String,
        default:""
    }
})

const books=mongoose.model('books',bookSchema)
module.exports=books
