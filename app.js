const express = require('express')
const app = express()

const router = require('./router')

app.use(express.static('public'))
app.set('views', 'views') // o 1o parametro precisa ser 'views' que estamos especificando as views, o 2o é o nome da pasta.
app.set('view engine', 'ejs') // engine que vai renderizar as views

app.use('/', router)

app.listen(3000)

