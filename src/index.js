// app.js atau server.js
const express = require("express"); // memanggil library express js
const cors = require("cors"); // memanggil library cors
const praktikumControllers = require('./controllers/praktikumControllers'); // memanggil controller

const app = express();

app.use(cors()); // mengaktifkan CORS
app.use(express.json()); // mengaktifkan parsing JSON untuk request body

const praktikum = require("./routers/praktikumRouters")

// Routing
app.get("/profil/:name/:age", praktikumControllers.profil);
app.get("/bujur_sangkar", praktikumControllers.bujurSangkar);

// Menjalankan server pada port 4000
app.listen(4000, () => {
    console.log("Server run on port 4000");
});
