const express = require('express')
const app = express()
const port = 3000
const MovieRouter = require('./movies/routes');

app.use('/movies', MovieRouter)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

module.exports = app;