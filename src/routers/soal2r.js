const express = require("express");
const app = express()

app.use(express.json())


const praktikumControllers = require('../controllers/soal2')

// disini
app.post("/selsius/:selsius", praktikumControllers.selsius);
app.post("/reamur/:reamur", praktikumControllers.reamur);
app.post("/kelvin/:kelvin", praktikumControllers.kelvin);
app.post("/fahrenheit/:fahrenheit", praktikumControllers.fahrenheit)



module.exports = app