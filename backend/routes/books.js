const express = require('express');
const router = express.Router();

// Controlles
const booksController = require('../controllers/books');

router.get('/', booksController.getBooks);
router.post('/', booksController.createBooks);
router.delete('/:id', booksController.deleteBooks);

module.exports = router;