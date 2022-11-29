const Syllabus = require('../models/syllabus');
module.exports = {
    getSyllabus: async (req, res) => {
        try {
            const syllabus = await Syllabus.find(req.query);
            res.status(200).json(syllabus);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    createSyllabus: async (req, res) => {
        try {
            req.body.user = req.userId;
            const syllabus = new Syllabus(req.body);
            const savedSyllabus = await syllabus.save();
            res.status(200).json(savedSyllabus);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    updateSyllabus: async (req, res) => {
        try {
            const syllabus = await Syllabus.findByIdAndUpdate(req.params.id, {
                ...req.body
            }, { new: true });
            res.status(200).json(syllabus);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    deleteSyllabus: async (req, res) => {
        try {
            const syllabus = await Syllabus.findByIdAndDelete(req.params.id);
            res.status(200).json(syllabus);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    mySyllabus: async (req, res) => {
        try {
            const syllabus = await Syllabus.find({ user: req.userId });
            res.status(200).json(syllabus);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}