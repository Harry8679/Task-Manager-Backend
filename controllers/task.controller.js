const asyncHandler = require('express-async-handler');
const Task = require('../models/task.model');
const mongoose = require('mongoose');

const getAllTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json(tasks);
});

const createTask = asyncHandler(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(200).json(task);
});

const SingleTask = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;

        // Vérifier si l'ID est un ObjectId valide
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "The ID entered is not of the right type" });
        }

        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ message: `No task with this id ${id} does not exist` });
        }

        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const DeleteTask = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;

        // Vérifier si l'ID est un ObjectId valide
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "The ID entered is not of the right type" });
        }

        const task = await Task.findByIdAndDelete(id);

        if (!task) {
            return res.status(404).json({ message: `No task with this id ${id} does not exist` });
        }
        // await Task.findByIdAndDelete(id);
        
        res.send('Task deleted successfully');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = { getAllTasks, createTask, SingleTask, DeleteTask };