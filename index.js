const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => res.send('/get » Server is running'))
app.listen(port, console.log(`Server listening on ${port}`))