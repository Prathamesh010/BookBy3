const { getBook, getBooks, createBook, deleteBook, updateBook } = require('../controllers/books');

const router = require('express').Router();

router.get('/books', getBooks);
router.get('/books/:id', getBook);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

module.exports = router;