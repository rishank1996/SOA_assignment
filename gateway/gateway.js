const express = require('express')
const movieRoutes = require('./routes/movieRoutes.js');
//const userRoutes = require('routes/userRoutes.js');
const app = express()
const port = 80

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use('/', movieRoutes);

//app.use('/user', userRoutes);

app.listen(port, () => {
  console.log(`Movie service listening on port ${port}`)
})