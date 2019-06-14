const submodule = require('my-sub-module')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log('get이 불려졌습니다.')
    res.send('success')
})

app.listen(3000, () => {
    submodule()
})