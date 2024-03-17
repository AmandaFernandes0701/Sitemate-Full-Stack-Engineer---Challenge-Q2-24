const express = require('express');
const routes = require('./routes');
const cors = require('cors');

require('dotenv').config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);
app.use('*', (req, res) => {
  res.status(404).json({ message: `Route '${req.baseUrl}' not founded.` });
});

module.exports = app;
