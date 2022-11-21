const isAuth = require('../middlewares/isAuth');
const { getBook, getBooks, createBook, deleteBook, updateBook } = require('../controllers/books');

const router = require('express').Router();

router.get('/books', getBooks);
router.get('/books/:id', getBook);
router.post('/books', isAuth, createBook);
router.put('/books/:id', isAuth, updateBook);
router.delete('/books/:id', isAuth, deleteBook);

module.exports = router;