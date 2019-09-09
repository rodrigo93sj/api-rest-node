const app = require('express')()
const consign = require('consign')
const { port } = require('./.env')
require('./config/db')

consign()
  .include('./app/middlewares/authToken.js')
  .then('./config/middlewares.js')
  .then('./app/models/')
  .then('./app/controllers')
  .then('./routes/routes.js')
  .into(app)

app.listen(port, () => {
  console.log('Servidor online')
})