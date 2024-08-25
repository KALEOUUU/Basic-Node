const express = require("express");
const app = express();

app.use(express.json());

const controlBmi = require('../controllers/soal4');

app.post('/bmi', controlBmi.bmi);

module.exports = app;