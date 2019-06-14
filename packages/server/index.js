const submodule = require('my-sub-module')
const express = require('express')

const app = express()

app.listen(3000, () => {
    submodule()
})