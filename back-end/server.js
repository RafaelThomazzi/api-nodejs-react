const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('inserir o banco de dados aqui' , {
    useNewUrlParser: true
});

requireDir('./src/models');

// Rotas
app.use("/api", require("./src/routes"));
app.listen(3001);
