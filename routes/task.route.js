const express = require('express');
const { getAllTasks, createTask, SingleTask, DeleteTask } = require('../controllers/task.controller');
const router = express.Router();

router.get('/', getAllTasks);
router.get('/:id', SingleTask);
router.post('/create', createTask);
router.delete('/:id', DeleteTask);

module.exports = router;