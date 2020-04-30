const User = require('../models/User')

exports.login = function () {

}

exports.logout = function () {

}

exports.register = function (req, res) {
    let user = new user(req.body)
    user.register()
    res.send('thaaankssss')
}

exports.home = function (req, res) {
    res.render('home-guest')
}

