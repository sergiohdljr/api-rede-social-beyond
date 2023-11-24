const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./controllers/PostController");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/api/v1", routes);

module.exports = app;
