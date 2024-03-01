const express = require('express');
const Task = require('../models/models');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const docs = await Task.find();
        res.json(docs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const task = new Task(req.body);
        const doc = await task.save();
        res.json(doc);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const doc = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.json(doc);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const doc = await Task.findByIdAndDelete(req.params.id);
        res.json(doc);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
