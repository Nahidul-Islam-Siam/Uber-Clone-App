const dotenv = require("dotenv");

dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDB = require("./db/db");
const userRouters = require("./routes/user.routes");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use('/users',userRouters);
connectToDB();

module.exports = app;
