const express = require('express');
const mysql = require('mysql');
const env = require('dotenv');
const app = express();
const cors = require('cors');
const mysqlConnection = require('./server');
const registerroutes = require('./routes/register');


env.config()
app.use(cors());
app.use(express.json());
app.use('/api', registerroutes);


app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
