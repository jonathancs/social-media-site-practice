const User = require('../models/User')

exports.login = function (req, res) {
    let user = new User(req.body)
    user.login(function (result) {  //provide a function as ARGUMENT porque não são sabemos quanto vai demorar
        res.send(result)
    }) // when to send back the response. WHEN ?   traditionally: callback;  modern: promises    
}

exports.logout = function () {

}

exports.register = function (req, res) {
    let user = new User(req.body)
    user.register()
    if (user.errors.length) {
        res.send(user.errors)
    } else {
        res.send("congrats, no errors")
    } 
}

exports.home = function (req, res) {
    res.render('home-guest')
}

