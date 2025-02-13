const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", require("./routes/auth"));

mongoose
	.connect("mongodb://localhost:27017/HealthTech")
	.then(() => app.listen(3000, () => console.log("Server running")))
	.catch((err) => console.log(err));
