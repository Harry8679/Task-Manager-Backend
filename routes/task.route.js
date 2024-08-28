const express = require('express');
const { getAllTasks, createTask } = require('../controllers/task.controller');
const router = express.Router();

router.get('/', getAllTasks);
router.post('/create', createTask);

module.exports = router;