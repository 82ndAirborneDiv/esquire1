const express = require('express')
process.env.NODE_ENV = 'production'

const app = express()

app.use(express.static('./dist/'))
app.use('/', express.static('./dist/index.html'))
app.use('*', express.static('./dist/index.html'))
app.listen(5000, '0.0.0.0')
