const asyncHandler = require('express-async-handler');

const getAllTasks = asyncHandler(async (req, res) => {
    res.send('Get All Tasks updated 2');
});

module.exports = { getAllTasks };