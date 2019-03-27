const mongoose = require('mongoose');
const Book = require('../models/book.models');

/**
 * @api {POST} /v1/book 1. Create
 * @apiName create
 * @apiGroup Book
 * @apiDescription Create new Book
 * @apiVersion  1.0.0
 
 * @apiParam (Headers) {String} Authorization Json Web Token (JWT).
 * @apiParam (Headers) {application/json} Content-Type Content type header.
 * @apiParam (Body) {String} Title
 * @apiParam (Body) {String} author
 * @apiParam (Body) {Number} Year
 * @apiParam (Body) {Number} pages
 *
 * 
 *
 * @apiParamExample  {JSON} Body-Example:
 * {
 * 		"title":"conan 97",
 * 		 "author":"NXB Kim Dong",
 * 		 "year" :2019,
 * 		 "pages":191
 *}

 *
 *@apiSuccessExample {JSON} Response: HTTP/1.1 200 OK

    {
        "_id": "5c9ada510ff30d0b648ac186",
        "title": "conan 97",
        "author": "NXB Kim Dong",
        "year": 2019,
        "pages": 191,
        "createdAt": "2019-03-27T02:05:05.488Z"
	}
*@apiSuccessExample  {json} Error-Response: HTTP/1.1 403 
   {
    "code": "FORBIDDEN",
    "name": "Forbidden",
    "message": "You don't have permission to access this resource."
 }

 */

/* POST */
function postBook(req, res) {
	//Creates a new book
	var newBook = new Book(req.body);
	//Save it into the DB.
	newBook.save((err, book) => {
		if (err) {
			// res.send(err);
			// res.status(403).send("FORBIDDEN")
		}
		else { //If no errors, send it back to the client
			res.json({ message: "Book successfully added!", book });
		}
	});
}





/**
 * @api {GET} /v1/book 2.List
 * @apiName List
 * @apiGroup Book
 * @apiDescription List all Books
 * @apiVersion 1.0.0

 * 
 * @apiParam (Headers) {String} JWT
 * @apiParam (Headers) {application/json} Content-Type Content type header.
 * 
 * 
 * @apiSuccessExample {JSON} {JSON} Response: HTTP/1.1 200 OK
 *  {
        "_id": "5c9ada510ff30d0b648ac186",
        "title": "conan 97",
        "author": "NXB Kim Dong",
        "year": 2019,
        "pages": 191,
        "createdAt": "2019-03-27T02:05:05.488Z"
    },
    {
        "_id": "5c9adceefbc4cf131e352947",
        "title": "conan 97",
        "author": "NXB Kim Dong",
        "year": 2019,
        "pages": 191,
        "createdAt": "2019-03-27T02:16:14.978Z"
    },
    {
        "_id": "5c9adf092f272e168bd2796a",
        "title": "conan 97",
        "author": "NXB Kim Dong",
        "year": 2019,
        "pages": 191,
        "createdAt": "2019-03-27T02:25:13.629Z"
    },
    {
        "_id": "5c9ae30b0963a71a74bb7323",
        "title": "conan 12",
        "author": "NXB Kim Dong",
        "year": 2019,
        "pages": 191,
        "createdAt": "2019-03-27T02:42:19.543Z"
    },
    {
        "_id": "5c9ae3100963a71a74bb7324",
        "title": "conan 13",
        "author": "NXB Kim Dong",
        "year": 2019,
        "pages": 191,
        "createdAt": "2019-03-27T02:42:24.867Z"
    },
    {
        "_id": "5c9aeac0c6413c22235e3419",
        "title": "conan 13",
        "author": "NXB Kim Dong",
        "year": 2019,
        "pages": 192,
        "createdAt": "2019-03-27T03:15:12.808Z"
    },
    {
        "_id": "5c9af1f0f04727286266b68c",
        "title": "conan 14",
        "author": "NXB Kim Dong",
        "year": 2019,
        "pages": 192,
        "createdAt": "2019-03-27T03:45:52.240Z"
    },
    {
        "_id": "5c9af1f5f04727286266b68d",
        "title": "conan 16",
        "author": "NXB Kim Dong",
        "year": 2019,
        "pages": 192,
        "createdAt": "2019-03-27T03:45:57.584Z"
    },
    {
        "_id": "5c9af1f9f04727286266b68e",
        "title": "conan 19",
        "author": "NXB Kim Dong",
        "year": 2019,
        "pages": 192,
        "createdAt": "2019-03-27T03:46:01.427Z"
    },
    {
        "_id": "5c9af1fef04727286266b68f",
        "title": "conan 25",
        "author": "NXB Kim Dong",
        "year": 2019,
        "pages": 192,
        "createdAt": "2019-03-27T03:46:06.879Z"
    }
 * 
 * 
 */



/* GET BOOK */
function getBooks(req, res) {
	//Query the DB and if no errors, send all the books
	const query = Book.find({});
	query.exec((err, books) => {
		if (err) res.send(err);
		//If no errors, send them back to the client
		res.json(books);
	});
}

/**
 * @api {GET} /v1/book/:id 3.Detail
 * @apiName Detail
 * @apiGroup Book
 * @apiDescription Detai book
 * @apiVersion 1.0.0
 * @apiParam (Headers) {application/json} Content-Type Content type header.
 * 
 * @apiParam (Headers) {String} JWT
 * @apiParam (Params) {String} id Book id
 
 * 
 * @apiSucessExample {JSON} Response:HTTP/1.1 200 OK
 * {
    "_id": "5c9ada510ff30d0b648ac186",
    "title": "conan 97",
    "author": "NXB Kim Dong",
    "year": 2019,
    "pages": 191,
    "createdAt": "2019-03-27T02:05:05.488Z"
}
 * 
 */

/*
 * GET /book/:id route to retrieve a book given its id.
 */
function getBook(req, res) {
	Book.findById(req.params.id, (err, book) => {
		if (err) res.send(err);
		//If no errors, send it back to the client
		res.json(book);
	});
}


/**
 * @api {DELETE} /v1/book/:id 4.Delete
 * @apiName delete
 * @apiGroup Book
 * @apiDescription Delete Book
 * @apiVersion 1.0.0
 * @apiParam (Headers) {application/json} Content-Type Content type header.
 * @apiSuccessExample {JSON} Response: HTTP/1.1 200 OK
 * 
 * {
    "message": "Book successfully deleted!",
    "result": {
        "n": 1,
        "ok": 1
    }
}
 * 
 */

/*
 * DELETE /book/:id to delete a book given its id.
 */
function deleteBook(req, res) {
	Book.remove({ _id: req.params.id }, (err, result) => {
		res.json({ message: "Book successfully deleted!", result });
	});
}
/**
 * @api {UPDATE} /v1/book/:id  5.Update
 * @apiName update
 * @apiGroup Book
 * @apiDescription Update Book
 * @apiVersion 1.0.0
 * @apiParam (Headers) {application/json} Content-Type Content type header.
 * @apiParam (Body) {String} title
 * @apiParam (Body) {String} author
 * @apiParam (Body) {Number} year
 * @apiParam (Body) {Number} pages
 * @apiSuccessExample {JSON} Response: HTTP/1.1 200 OK 
 * {
    "message": "Book updated!",
    "book": {
        "_id": "5c9ae3100963a71a74bb7324",
        "title": "conan 25",
        "author": "NXB Kim Dong",
        "year": 2017,
        "pages": 193,
        "createdAt": "2019-03-27T02:42:24.867Z"
    }
}
 */


/*
 * PUT /book/:id to update a book 
 */
function updateBook(req, res) {
	Book.findById({ _id: req.params.id }, (err, book) => {
		if (err) res.send(err);
		// object.assign Merge With Same Properties
		Object.assign(book, req.body).save((err, book) => {
			if (err) res.send(err);
			res.json({ message: 'Book updated!', book });
		});
	});
}

//export all the functions
module.exports = {
	getBooks,
	postBook,
	getBook,
	deleteBook,
	updateBook
};