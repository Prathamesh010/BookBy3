const mongoose = require('mongoose');

const syllabusSchema = new mongoose.Schema({
    branch: {
        type: String,
        required: true
    },
    sem: {
        type: String,
        required: true,
        enum: ['1', '2', '3', '4', '5', '6', '7', '8']
    },
    year: {
        type: String,
        required: true,
        enum: ['FE', 'SE', 'TE', 'BE']
    },
    file: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Syllabus', syllabusSchema);

