
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const book = require('./app/routes/book');
const config = require('config');// load db location from json files;
const mongoose = require('mongoose');


// db option
const options = { 
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } 
  }; 
var uri = "mongodb://localhost:27017/StoreBook"
mongoose.connect('mongodb://localhost:27017/StoreBook', {useNewUrlParser: true});

mongoose.connect(uri, { keepAlive: true, keepAliveInitialDelay: 300000 }, function(err){
             console.log('Mongoose disconnected!!');
});

// )



// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));

// //don't show the log when it is test
// if(config.util.getEnv('NODE_ENV') !== 'test') {
// 	//use morgan to log at command line
// 	app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
// }
// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI, err => {
//     if(err) 
//         console.log(err);
//     } 
// );





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

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
