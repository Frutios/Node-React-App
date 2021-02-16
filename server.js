const express = require('express')
require('dotenv').config()
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use(express.static('client/build'))

app.get('/api/test', (req, res) => {
    res.send({
        msg: "Hello !"
    })
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build.index.html'))
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on port` + PORT))