const express = require("express");
const app = express()

app.use(express.json())


const praktikumControllers = require('../controllers/praktikumControllers')

// disini
app.get("/profil/:name/:age", praktikumControllers.profil)
app.get("/bujur_sangkar", praktikumControllers.bujurSangkar)

module.exports = app