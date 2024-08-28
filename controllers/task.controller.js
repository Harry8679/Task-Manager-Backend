const asyncHandler = require('express-async-handler');
const Task = require('../models/task.model');

const getAllTasks = asyncHandler(async (req, res) => {
    res.send('Get All Tasks updated 2');
});

const createTask = asyncHandler(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(200).json(task);
});

module.exports = { getAllTasks, createTask };