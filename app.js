// Include packages and server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// Set template engine
app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))

// Set body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// Set routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  console.log('options:', options)
  res.render('index')
})

// Listen to server
app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})
