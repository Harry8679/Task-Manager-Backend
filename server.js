const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./config/connectDB');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4500;

connectDB();



app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})