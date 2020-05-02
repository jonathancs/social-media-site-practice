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
        res.send(result)
    }).catch(function (error) {
        res.send(error)
    })
    /* só que lá do /User, o método 'login' 
    vai nos retornar uma promessa,
    então a pergunta é:
    como usamos uma promessa, depois de criada?
        .then().catch() */
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

