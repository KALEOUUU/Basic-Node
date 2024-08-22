const express = require("express");
const app = express()

app.use(express.json())


const praktikumControllers = require('../controllers/praktikumControllers')

// disini
app.get("/profil/:name/:age", praktikumControllers.profil)
app.post("/", praktikumControllers.bujurSangkar)
app.post("/celsius/:celsius", praktikumControllers.convertCelsius);
app.post("/reamur/:reamur", praktikumControllers.convertReamur);
app.post("/kelvin/:kelvin", praktikumControllers.convertKelvin);
app.post("/fahrenheit/:fahrenheit", praktikumControllers.convertFahrenheit)


module.exports = app