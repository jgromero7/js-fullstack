const { Schema, model } = require('mongoose');

const BooksSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    isbn: {type: String, required: true},
    imagePath: {type: String},
    created_ad: {type: Date, default: Date.now},
});

module.exports = model('Books', BooksSchema);