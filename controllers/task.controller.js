const asyncHandler = require('express-async-handler');
const Task = require('../models/task.model');

const getAllTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json(tasks);
});

const createTask = asyncHandler(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(200).json(task);
});

module.exports = { getAllTasks, createTask };