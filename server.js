const express = require('express');
const app = express();
var expressValidator = require('express-validator');
app.use(expressValidator())

const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT ||3000;
const Book = require('./routes/book.js');

//don't show the log when it is test
if(process.env.NODE_ENV !== 'test') {
    //use morgan to log at command line
    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}

//parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.get("/", (req, res) => res.json({message: "Welcome to our Bookstore!"}));

app.route("/Books")
    .get(Book.getBooks)
    .post(Book.postBook);
app.route("/Books/:id")
    .get(Book.getBook)
    .delete(Book.deleteBook)
    .put(Book.updateBook);

app.listen(port, () =>{
    console.log(`Server running on ${port}`)
})

module.exports = app; // for testing