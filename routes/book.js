const Book = require('../model/book.js')
/**
 * GET
 */
const getBooks = (req, res) => {
    Book.find((err, books) => {
        if (err) {
            return res.send(err);
        }
        res.send(books)
    });
};
/** POST */

// const postBook = (req, res) => {
//     Book.save(book, (err, newBook) => {
//         let book = req.body;
//         if( err){
//             res.send(err);
//             return;
//         }
//             res.send({
//                 massage:'Books succes added',
//                 Book: newBook
//             });
//     });
// };
const postBook = (req,res) =>{
    req.checkBody('id','id cannot empty').notEmpty();
    req.checkBody('name','name cannot be empty').notEmpty();
    req.checkBody('status','status avaiable').notEmpty();
    let book = req.body;
    Book.save(book,(err,newBook) =>{
        
        if(err) {
            res.send(err);
            return;
        }
            res.send({
                massage:'Book success added',
                Book:newBook
            });
    });
}
   



/** GET BY Id */
const getBook = (req,res) =>{
    Book.findById(req.params.id, (err,book) =>{
        if(err){
            res.send(err);
            return;
        }
            res.send(book)
    });
};
/**DELETE BY ID */
 const deleteBook = (req,res) =>{
     Book.delete(req.params.id,(err,result) =>{
         if(err){
             res.send(err);
             return;
         }
             res.send({
                 massage:'Delete Success',
                 result
             })
     })
 };
 /** UPDATE BOOK */
const updateBook = (req,res) =>{
    Book.update(req.params.id,req.body.id ,(err,book) =>{
        if(err){
            res.send(err);
            return;
        }
            res.send({
                massage:' Book change success',
                book
            })
    })
};
module.exports ={
    getBooks,
    postBook,
    getBook,
    deleteBook,
    updateBook
}
