const express = require('express')
const userRoutes = require('routes/userRoutes.js');
const app = express()
const port = 3000

app.use('/', userRoutes);

app.listen(port, () => {
  console.log(`User service listening on port ${port}`)
})