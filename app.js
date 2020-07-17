const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')


app.use('/', indexRouter)
app.use('/user', userRouter)

app.listen(PORT, console.log(`Server started on port ${PORT}`))
