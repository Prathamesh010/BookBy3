const isAuth = require('../middlewares/isAuth');
const { getBook, getBooks, createBook, deleteBook, updateBook, myBooks, getChatByBook, addMessage, createChat, getOrCreateChat, getChatById } = require('../controllers/books');
const { getSyllabus, createSyllabus, updateSyllabus, deleteSyllabus, mySyllabus } = require('../controllers/syllabus');
const { getResources, myResources, createResource, updateResource, deleteResource } = require('../controllers/resources');

const router = require('express').Router();

router.get('/books', getBooks);
router.get('/books/me', isAuth, myBooks);
router.get('/books/:id', getBook);
router.post('/books', isAuth, createBook);
router.put('/books/:id', isAuth, updateBook);
router.delete('/books/:id', isAuth, deleteBook);


router.post('/chat/getOrCreateChat', isAuth, getOrCreateChat);
router.get('/chat/book/:id', isAuth, getChatByBook);
router.get('/chat/:id', isAuth, getChatById);
router.post('/chat/:id', isAuth, addMessage);

router.get('/syllabus', getSyllabus);
router.get('/syllabus/me', isAuth, mySyllabus);
router.post('/syllabus', isAuth, createSyllabus);
router.put('/syllabus/:id', isAuth, updateSyllabus);
router.delete('/syllabus/:id', isAuth, deleteSyllabus);

router.get('/resources', getResources);
router.get('/resources/me', isAuth, myResources);
router.post('/resources', isAuth, createResource);
router.put('/resources/:id', isAuth, updateResource);
router.delete('/resources/:id', isAuth, deleteResource);


module.exports = router;