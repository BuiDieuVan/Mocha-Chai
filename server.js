/**
 * Created by hoangdv on 0028, Jun, 28, 2017.
 */
let express = require('express');
let app = express();
let morgan = require('morgan');
let bodyParser = require('body-parser');
let port = process.env.PORT || 8080;
let book = require('./routes/book');


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

app.route("/books")
    .get(book.getBooks)
    .post(book.postBook);
app.route("/books/:id")
    .get(book.getBook)
    .delete(book.deleteBook)
    .put(book.updateBook);

app.listen(port);
console.log("Listening on port " + port);

module.exports = app;
