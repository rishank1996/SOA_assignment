const express = require('express');
const mongoose = require("mongoose");
const reviewRoutes = require('./routes/reviewRoutes.js');
const app = express()
const port = 4000

const mongoDB = "mongodb://127.0.0.1/movies";
mongoose.connect(mongoDB);

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use('/', reviewRoutes);

app.listen(port, () => {
  console.log(`Review service listening on port ${port}`)
})