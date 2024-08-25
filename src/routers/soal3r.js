const express = require('express');
const app = express.Router();
const ubahAngka = require('../controllers/soal3');


app.post('/decimal', ubahAngka.decimal);
app.post('/biner', ubahAngka.biner);
app.post('/oktal', ubahAngka.oktal);
app.post('/hexadecimal', ubahAngka.hexadecimal);

module.exports = app;
