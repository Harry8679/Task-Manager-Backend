const express = require('express');
const { getAllTasks, createTask, SingleTask } = require('../controllers/task.controller');
const router = express.Router();

router.get('/', getAllTasks);
router.get('/:id', SingleTask);
router.post('/create', createTask);

module.exports = router;