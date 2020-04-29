const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('views', 'views') // o 1o parametro precisa ser 'views' que estamos especificando as views, o 2o é o nome da pasta.
app.set('view engine', 'ejs') // engine que vai renderizar as views

app.get('/', function (req, res) {
    res.render('home-guest')
})

app.listen(3000)