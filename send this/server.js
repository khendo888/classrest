//Require packages
// ============================================
const lodash = require("lodash");
const express = require("express");
const path = require("path")


// Instantiating express server
// ============================================
const app = express();
const PORT = 3000;

app.listen(PORT);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/tables', function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get('/reserve', function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get('/api/tables', function (req, res) {
  res.json(tables)
});

app.get('/api/waitlist', function (req, res) {
  res.json(waitlist)
});