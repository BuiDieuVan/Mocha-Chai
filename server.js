
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const book = require('./app/routes/book.controller');
const config = require('./config/dev.json');// load db location from json files;
const mongoose = require('mongoose');

mongoose.connect(config.MONGO_URI, {useNewUrlParser: true});


// if(config.util.getEnv('NODE_ENV') !== 'test') { app.use(morgan('combined')); });
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));
app.use('/coverage', express.static('coverage'));
app.use('/apidoc', express.static('build'));

app.get("/", (req, res) => res.json({message: "Welcome to our Bookstore!"}));

app.route("/book")
    .get(book.getBooks)
    .post(book.postBook);
app.route("/book/:id")
    .get(book.getBook)
    .delete(book.deleteBook)
    .put(book.updateBook);

app.listen(port);
console.log("Listening on port " + port);

module.exports = app;// for testing
