const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./config/connectDB');

const taskRoutes = require('./routes/task.route');

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api/v1/tasks', taskRoutes);

const PORT = process.env.PORT || 4500;

connectDB();



app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})