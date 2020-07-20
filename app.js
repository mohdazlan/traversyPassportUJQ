const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path');
const mongoose = require('mongoose')

const app = express()

// DB Config
const db = require('./config/keys').MongoURI

// Connect to Mongo
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine','ejs')
app.set('views', __dirname + '/views')

// Static Files
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public/')))

const PORT = process.env.PORT || 5000

const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')


app.use('/', indexRouter)
app.use('/users', userRouter)

app.listen(PORT, console.log(`Server started on port ${PORT}`))
