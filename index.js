const express = require('express')

const cors = require('cors')
const middleware = cors()

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const router = require('./movies/router')

const app = express()
const port = process.env.PORT || 4000

app.use(middleware)
app.use(jsonParser)

app.use(router)

app.get('/', (req, res) => res.send('/get » Server is running'))
app.listen(port, () => console.log(`Server listening on ${port}`))