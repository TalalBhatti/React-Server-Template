// importing libraries
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// app init
const app = express();

// default port
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")))
app.all("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
