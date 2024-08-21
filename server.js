const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world vs chucdeptrai haha')
})

app.listen(port, () => {
    console.log(`example app listen at port: ${port}`)
})