const Book = require('../models/book')
const debug = require('debug')('backend:bookController')

module.exports = {
    getBooks: async (req, res) => {
        Book.find((err, doc) => {
            if (err) {
                res.status(500).json({
                    message: err.message
                });
                return;
            }
            res.status(200).json(doc);
        });
    },
    getBook: async (req, res) => {
        Book.findById(req.params.id, (err, doc) => {
            if (err) {
                res.status(500).json({
                    message: err.message
                });
                return;
            }
            res.status(200).json(doc);
        });
    },
    createBook: async (req, res) => {
        const book = new Book({
            ...req.body,
            user: req.userId
        });
        book.save((err, doc) => {
            if (err) {
                res.status(500).json({
                    message: err.message
                });
                return;
            }
            res.status(200).json(doc);
        });
    },
    updateBook: async (req, res) => {
        Book.findByIdAndUpdate(req.params.id, {
            ...req.body
        }, { new: true }, (err, doc) => {
            if (err) {
                res.status(500).json({
                    message: err.message
                });
                return;
            }
            res.status(200).json(doc);
        })
    },
    deleteBook: async (req, res) => {
        Book.findByIdAndDelete(req.params.id, (err, doc) => {
            if (!doc) {
                res.status(404).json({
                    message: 'Book not found'
                });
                return;
            }
            if (err) {
                res.status(500).json({
                    message: err.message
                });
                return;
            }
            res.status(200).json({
                message: 'Book deleted successfully'
            });
        });
    },
    myBooks: async (req, res) => {
        Book.find({ user: req.userId }, (err, doc) => {
            if (err) {
                res.status(500).json({
                    message: err.message
                });
                return;
            }
            res.status(200).json(doc);
        });
    }
}