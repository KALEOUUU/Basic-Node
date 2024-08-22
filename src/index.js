// app.js atau server.js
const express = require("express"); // memanggil library express js
const cors = require("cors"); // memanggil library cors

const app = express();

app.use(cors()); // mengaktifkan CORS
app.use(express.json()); // mengaktifkan parsing JSON untuk request body

const praktikum = require("./routers/praktikumRouters")
const soal1 = require('./routers/soal2r')
const soal2 = require('./routers/soal1r')

app.use('/praktikum', praktikum)
app.use('/soal1', soal1)
app.use('/soal2', soal2)

// Menjalankan server pada port 4000
app.listen(4000, () => {
    console.log("Server run on port 4000");
});
