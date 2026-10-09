const bookModel =  require ('../Models/bookModel')

// add a book:by  a user
exports.addBook= async(req,res)=>{
    const {title,author,noOfPages,imageUrl,price,discountPrice,abstract,
        publisher,language,isbn,category}=req.body
        const sellerMail=req.payload?.userMail
        const uploadedImages=req.files.map(item=>item.filename)
        console.log(title,author,noOfPages,imageUrl,price,discountPrice,abstract,
            publisher,language,isbn,category,sellerMail,uploadedImages)
            const existingBook= await books.findOne(sellerMail,isbn)
            if(existingBook){
                res.status(400).json({msg:"Book already exists"})
            }
            else{
                const newBook=await books.create({title,author,noOfPages,imageUrl,
                    price,discountPrice,abstract,publisher,language,isbn,category,sellerMail,uploadedImages})
                res.status(200).json("newBook")
            }
        }
            

// latest books list:4 latest books

// list books:ignore books added by logined user

// list user added books

// remove book by user : before adminm approves it

// view book details : details of a specific book

// get all books : admin

// update book status :admin approval

// book payment