const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

const indexRouter = require('./routes/index')


app.use('/', indexRouter)

app.listen(PORT, console.log(`Server started on port ${PORT}`))
