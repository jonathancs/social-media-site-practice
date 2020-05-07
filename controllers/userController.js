const User = require('../models/User')

exports.login = function (req, res) {
    let user = new User(req.body)  
    /* we are creating this 'user' object from the 'User' blueprint 
       and calling its login method.
       PORQUE TANTO PELO FORMULÁRIO DE LOGIN NO SITE, 
       quanto pelo formulário de registro, 
       os dados submetidos ao servidor
       servem para CRIAR UM OBJETO USUÁRIO, 
       que significa conceder-lhe as ações de
       register, login, logout, post e follow,
       não importando se o usuário tá entrando pela 1ª vez
       ou logando na vigésima vez */

    user.login().then(function (result) {
        req.session.browserUser = {favColor: "blue", username: user.data.username}
        req.session.save(function () {
            res.redirect('/')
        })
    }).catch(function (e) {
        req.flash('errors', e)
        req.session.save(function () {
            res.redirect('/')
        })
    })
    /* só que lá do /User, o método 'login' 
    vai nos retornar uma promessa,
    então a pergunta é:
    como usamos uma promessa, depois de criada?
        .then().catch() */
}

exports.logout = function (req, res) {
    req.session.destroy(function () {
        res.redirect('/')
    })
}

exports.register = function (req, res) {
    let user = new User(req.body)
    user.register().then(() => {
        req.session.user = {username: username.data.username}
        req.session.save(function () {
            res.redirect('/')
        })
    }).catch((regErrors) => {
        regErrors.forEach(function (error) {
            req.flash('regErrors', error)
        })
        req.session.save(function () {
            res.redirect('/')
        })
    })
}

exports.home = function (req, res) {
    if (req.session.browserUser) {
        res.render('home-dashboard', {username: req.session.browserUser.username})
    } else {
        res.render('home-guest', {errors: req.flash('errors'), regErrors: req.flash('regErrors')})
    }
}

