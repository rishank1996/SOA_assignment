const express = require('express')
const mongoose = require("mongoose");
const movieRoutes = require('./routes/movieRoutes.js');
const app = express()
const port = 5000

const mongoDB = "mongodb://127.0.0.1/movies";
mongoose.connect(mongoDB);

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
})); 

app.use('/', movieRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(port, () => {
  console.log(`Movie service listening on port ${port}`)
})