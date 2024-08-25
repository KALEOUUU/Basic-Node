const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const praktikum = require("./routers/praktikumRouters");
const soal1 = require('./routers/soal2r');
const soal2 = require('./routers/soal1r');
const soal3 = require('./routers/soal3r');
const soal4 = require('./routers/soal4r');

// Routes
app.use('/praktikum', praktikum);
app.use('/soal1', soal1);
app.use('/soal2', soal2);
app.use('/soal3', soal3);
app.use('/soal4', soal4);

// Running server on port 4000
app.listen(4000, () => {
    console.log("Server running on port 4000");
});