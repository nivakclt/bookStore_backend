const bookModel =  require ('../Models/bookModel')

// add a book:by  a user
exports.addBook=async(req,res)=>{
    const {title,author,noOfPages,imageUrl,price,discountPrice,abstract,
        publisher,language,isbn,category}=req.body
        const sellerMail=req.payload?.userMail
        const uploadedImages=req.files.map(item=>item.filename)
        console.log(title,author,noOfPages,imageUrl,price,discountPrice,abstract,
            publisher,language,isbn,category,sellerMail,uploadedImages)
            res.status(200).json("Success")
}

// latest books list:4 latest books

// list books:ignore books added by logined user

// list user added books