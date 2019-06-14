const submodule = require('my-sub-module')
const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    console.log('get이 불려졌습니다.')
    res.send('success')
})

app.post('/', (req, res) => {
    const body = req.body
    console.log(`username: ${body.username} / password: ${body.password}`)

    res.send('post /')
})

app.listen(3000, () => {
    submodule()
})