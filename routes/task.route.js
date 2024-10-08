const express = require('express');
const { getAllTasks, createTask, SingleTask, DeleteTask, updateTask } = require('../controllers/task.controller');
const router = express.Router();

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(SingleTask).delete(DeleteTask).put(updateTask);

// router.get('/', getAllTasks);
// router.get('/:id', SingleTask);
// router.post('/create', createTask);
// router.delete('/:id', DeleteTask);
// router.put('/:id', updateTask);

module.exports = router;