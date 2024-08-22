const express = require("express");
const cors = require("cors");
const bangunRuangControllers = require('../controllers/soal1');

const app = express();

app.use(cors());
app.use(express.json());

// End-points untuk bangun ruang
app.post("/kubus", bangunRuangControllers.kubus);
app.post("/balok", bangunRuangControllers.balok);
app.post("/tabung", bangunRuangControllers.tabung);
app.post("/kerucut", bangunRuangControllers.kerucut);

module.exports = app
