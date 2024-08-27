const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})