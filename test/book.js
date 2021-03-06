
process.env.NODE_ENV = 'test';


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Books', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });
    /*
     * Test the /GET route
     */
    describe('/GET books', () => {
        it('it should GET all the books', (done) => {
            chai.request(server)
                .get('/books')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    // res.body.length.should.be.eql(100); 
                    done();
                });
        });
    });

    /*
     * Test the /POST route
     */
    describe('/POST books', () => {
        it('it should POST a book', (done) => {
            let book = {
                name: "Bug",
                status: "detected"
            };
            chai.request(server)
                .post('/books')
                .send(book)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Book successfully added!');
                    res.body.book.should.have.property('id');
                    res.body.book.should.have.property('name').eql(book.name);
                    res.body.book.should.have.property('status').eql(book.status);
                    done();
                });
        });
        it('it should not POST a book without status field', (done) => {
            let book = {
                name: "Bug"
            };
            chai.request(server)
                .post('/books')
                .send(book)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql("Book is invalid!");
                    done();
                });
        });
    });

    /*
     * Test the /GET/:id route
     */
    describe('/GET/:id books', () => {
        it('it should GET a book by the given id', (done) => {
            // TODO add a model to db then get that id to take this test
            let id = 1;
            chai.request(server)
                .get('/books/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('book');
                    res.body.book.should.have.property('id').eql(id);
                    res.body.book.should.have.property('name');
                    res.body.book.should.have.property('status');
                    done();
                });
        });
    });

    /*
     * Test the /PUT/:id route
     */
    describe('/PUT/:id books', () => {
        it('it should UPDATE a book given the id', (done) => {
            // TODO add a model to db then get that id to take this test
            let id = 1;
            chai.request(server)
                .put('/books/' + id)
                .send({
                    name: "Bug",
                    status: "fixed"
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('book');
                    res.body.book.should.have.property('name').eql("Bug");
                    res.body.book.should.have.property('status').eql("fixed");
                    done();
                });
        });
    });

    /*
     * Test the /DELETE/:id route
     */
    describe('/DELETE/:id books', () => {
        it('it should DELETE a book given the id', (done) => {
            // TODO add a model to db then get that id to take this test
            let id = 1;
            chai.request(server)
                .delete('/books/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    
                    
                    res.body.should.be.a('object');
                    // res.body.should.have.property('book');
                    // res.body.book.should.be.a('object');
                    // res.body.book.should.have.property('id').eql(id);
                    res.body.should.have.property('message').eql('Book successfully deleted!');
                    res.body.should.have.property('result');
                    res.body.result.should.have.property('remoBook').eql(1);
                    done();
                });
        });
    });
});

