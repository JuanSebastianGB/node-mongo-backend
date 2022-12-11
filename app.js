const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dbConnection = require('./config/mongo');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('storage'));

const port = process.env.PORT || 3001;
app.use('/api', require('./routes'));

app.listen(port, () => console.log(`Listening on Port: ${port}`));
dbConnection();
