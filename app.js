const express = require('express')
const session = require('express-session')
const mongostore = require('connect-mongo')(session)
const flash = require('connect-flash')

const app = express()

let sessionOptions = session({
    secret: "Javascript is sooooo cooool",
    store: new mongostore({client: require('./db')}),
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24, httpOnly: true}
})

app.use(sessionOptions)
app.use(flash())


const router = require('./router')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(express.static('public'))
app.set('views', 'views') // o 1o parametro precisa ser 'views' que estamos especificando as views, o 2o é o nome da pasta.
app.set('view engine', 'ejs') // engine que vai renderizar as views

app.use('/', router)

module.exports = app



/*

esse curso mostra 

o que é um router
o que é um controller
o que é um model


*/