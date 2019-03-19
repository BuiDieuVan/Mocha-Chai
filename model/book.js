const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const express = require('express');
const app= express();
var expressValidator = require('express-validator');
app.use(expressValidator())

// const BookSchema = new Schema({
//     id: Number ,
//     name : String,
//     status:String 
//     // id:1,name:'toán 1', status:'available',

// });
// constlistBook = mongoose.model('Book',BookSchema);
var listBook =[
    {id: 1, name: 'toán 1', status: 'available'},
    {id: 2, name: 'toán 2', status: 'available'},
    {id: 3, name: 'toán 3', status: 'available'},
    {id: 4, name: 'toán 4', status: 'available'},
    {id: 5, name: 'toán 5', status: 'available'},
    {id: 6, name: 'toán 6', status: 'available'}
]

module.exports.find = (callback) => {
    callback(null,listBook);
};
module.exports.findById = (id, callback) => {
    callback(null,listBook.find(item => item.id == id)); // typeof id === "string"
};
module.exports.save = (book, callback) => {
    let {name, status} = book;
    if (!name || !status) {
        callback({message: "Book is invalid!"});
        return;
    }
    book = {
        id: Date.now(),
        name,
        status
    };
    // book.save(function (err,book){
    //     if(err) throw err ;
    //     else{
    //         return book;
        // }
    // });
   listBook.push(book);
    callback(null, book);
};


module.exports.delete = (id, callback) => {
    let roweffected =listBook.length;
   listBook =listBook.filter(item => item.id != id);
    roweffected = roweffected -listBook.length;
    callback(null, {roweffected})
};
module.exports.update = (id, book, callback) => {
    let oldBook =listBook.find(item => item.id == id);
    if (!oldBook) {
        callback("Book not found!");
        return;
    }
    let index =listBook.indexOf(oldBook);
    Object.assign(oldBook, book);
   listBook.fill(oldBook, index, ++index);
    callback(null, oldBook);
};