const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
app.use(express.json());

const PORT =  process.env.PORT || 5500;

const TodoItemRoute = require('./routes/todoItems');

mongoose.connect(process.env.DB_CONNECT)
.then(() => {
    console.log('Connected to database');
})
.catch((err) => {
    console.log(err)
})

app.use('/', TodoItemRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})