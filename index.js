/**
 * Entry file for web server
 * @author Tristan Mastrodicasa
 */

const express = require('express')
const fetchDataUtil = require('./helpers/fetch-data.util.js')

// Import the route handlers
const baseRoute = require('./routes/base')
const routesHandler = require('./routes/routes-handler.js')

const port = process.env.PORT || 80
const app = express()

// Config
app.set('view engine', 'ejs')

// app.use(bodyParser.urlencoded({extended: false})); Might need????

// Set route handlers
app.use('/', routesHandler)

// Allow serving static assets from public folder
app.use('/public', express.static('public'))

app.listen(port, async () => {
  console.log(`Server up and running on localhost:${port}`)
})
