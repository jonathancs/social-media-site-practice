const User = require('../models/User')
const Post = require('../models/Post')


exports.mustBeLoggedIn = function (req, res, next) {
    if (req.session.user) {
        next()
    } else {
        req.flash("errors", "you must be logged in to perform that actiiiionn")
        req.session.save(function () {
            res.redirect('/')
        })
    }
}

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
        req.session.user = {avatar: user.avatar, username: user.data.username, _id: user.data._id}
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
        req.session.user = {username: user.data.username, avatar: user.avatar, _id: user.data._id}
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
    if (req.session.user) {
        res.render('home-dashboard')
    } else {
        res.render('home-guest', {errors: req.flash('errors'), regErrors: req.flash('regErrors')})
    }
}

exports.ifUserExists = function (req, res, next) {
    User.findByUsername(req.params.username).then(function (userDocument) {
        req.profileUser = userDocument
        next()
    }).catch(function () {
        res.render('404')
    })
}

exports.profilePostsScreen = function (req, res) {
    // ask our post model for posts by a certain author id
    Post.findByAuthorId(req.profileUser._id).then(function (posts) {
        res.render('profile', {
            posts: posts,
            profileUsername: req.profileUser.username,
            profileAvatar: req.profileUser.avatar
        })    
    }).catch(function () {
        res.render('404')
    })


    
}

