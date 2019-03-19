
let ListData = [
    {id: 1, name: 'Kitty01', status: 'available'},
    {id: 2, name: 'Kitty02', status: 'available'},
    {id: 3, name: 'Kitty03', status: 'available'},
    {id: 4, name: 'Kitty04', status: 'available'},
    {id: 5, name: 'Kitty05', status: 'available'},
    {id: 6, name: 'Kitty06', status: 'available'},
    {id: 7, name: 'Kitty07', status: 'available'},
    {id: 8, name: 'Kitty08', status: 'available'},
    {id: 9, name: 'Kitty09', status: 'available'}
];
module.exports.find = (callback) => {
    callback(null, ListData);
};
module.exports.findById = (id, callback) => {
    callback(null, ListData.find(item => item.id == id)); // typeof id === "string"
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
    ListData.push(book);
    callback(null, book);
};
module.exports.delete = (id, callback) => {
    let remoBook = ListData.length;
    ListData = ListData.filter(item => item.id != id);
    remoBook = remoBook - ListData.length;
    callback(null, {remoBook})
};
module.exports.update = (id, book, callback) => {
    let oldBook = ListData.find(item => item.id == id);
    if (!oldBook) {
        callback("Book not found!");
        return;
    }
    let index = ListData.indexOf(oldBook);
    Object.assign(oldBook, book);
    ListData.fill(oldBook, index, ++index);
    callback(null, oldBook);
};
