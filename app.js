// console.log("Hello world")
const path= require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
const exphbs = require('express-handlebars')
const passport = require('passport')
const session = require('express-session')

//Load Config
dotenv.config({path: './config/config.env'})

//Passport config
  require('./config/passport')(passport)

connectDB()

const app = express()

//logging
if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'))
}

//handlebars
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

//Sessions
app.use(session({
    secret: 'dashboard',
    resave: false,
    saveUninitialized: false,
    //store
}))

//Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

//static
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT || 3000

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
