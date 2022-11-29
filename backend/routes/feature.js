const isAuth = require('../middlewares/isAuth');
const { getBook, getBooks, createBook, deleteBook, updateBook, myBooks } = require('../controllers/books');
const { getSyllabus, createSyllabus, updateSyllabus, deleteSyllabus, mySyllabus } = require('../controllers/syllabus');

const router = require('express').Router();

router.get('/books', getBooks);
router.get('/books/me', isAuth, myBooks);
router.get('/books/:id', getBook);
router.post('/books', isAuth, createBook);
router.put('/books/:id', isAuth, updateBook);
router.delete('/books/:id', isAuth, deleteBook);

router.get('/syllabus', getSyllabus);
router.get('/syllabus/me', isAuth, mySyllabus);
router.post('/syllabus', isAuth, createSyllabus);
router.put('/syllabus/:id', isAuth, updateSyllabus);
router.delete('/syllabus/:id', isAuth, deleteSyllabus);


module.exports = router;