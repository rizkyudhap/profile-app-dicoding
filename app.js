const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk mengakses file statis (HTML, CSS, gambar)
app.use(express.static("public"));

// Rute utama
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/public" });
});

// Atur server untuk mendengarkan port yang sesuai
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
