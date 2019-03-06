const books = {};
const Books = require('../models/Books');
const { unlink } = require('fs-extra');
const path = require('path');

books.getBooks = async (req, res) => {
    const books = await Books.find();
    
    res.json(books);
}

books.createBooks = async (req, res) => {
    const { title, author, isbn } = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    const newBook = new Books({title, author, isbn, imagePath})
    await newBook.save();
    res.json({message: 'Book Saved'});
}

books.updateBooks = async (req, res) => {
    res.json({text: 'Updated Book'});
}

books.deleteBooks = async (req, res) => {
    const id = req.params.id;
    const book = await Books.findByIdAndDelete(id);
    unlink(path.resolve('./backend/public' + book.imagePath));
    res.json({text: 'Book Deleted'});
}

module.exports = books;