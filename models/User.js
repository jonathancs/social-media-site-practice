const bcrypt = require("bcryptjs")
const usersCollection = require('../db').db().collection("users")
const validator = require("validator")


let User = function (data) {
    this.data = data;
    this.errors = [];
}

User.prototype.cleanUp = function() {
    if (typeof(this.data.username) != "string") {this.data.username = ""}
    if (typeof(this.data.email) != "string") {this.data.email = ""}
    if (typeof(this.data.password) != "string") {this.data.password = ""}

    // get rid of anything odd
    this.data = {
        username: this.data.username.trim().toLowerCase(),
        email: this.data.email.trim().toLowerCase(),
        password: this.data.password
    }
}

User.prototype.validate = async function () {
    if (this.data.username == "") {this.errors.push("you must provide a username")}
    if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {this.errors.push("username can only contain letters and numbers")}
    if (!validator.isEmail(this.data.email)) {this.errors.push("you must provide a valid email")}
    if (this.data.password == "") {this.errors.push("you must provide a password")}
    if (this.data.password.length > 0 && this.data.password.length < 12) {this.errors.push("password must be at least 12 characters")}
    if (this.data.password.length > 50) {this.errors.push("password cannot exceed 50 characters")}
    if (this.data.password.username > 0 && this.data.username.length < 3) {this.errors.push("Username must be at least 3 characters")}
    if (this.data.password.username < 100) {this.errors.push("username cannot exceed 100 characters")}

    // only if username is valid, check to see if its already taken
    if (this.data.username.length > 2 && this.data.username.length < 31 && validator.isAlphanumeric(this.data.username)) {
        let usernameExists = await usersCollection.findOne({username: this.data.username})
        if (usernameExists) {this.data.errors.push("this username is already takeeeennn")}
    }

    // only if email is valid, check to see if its already taken
    if (validator.isEmail(this.data.email)) {
        let emailExists = await usersCollection.findOne({email: this.data.email})
        if (emailExists) {this.data.errors.push("this username is already takeeeennn")}
    }

}

User.prototype.login = function () {
    return new Promise((resolve, reject) => { 
        /*an anonymous function behave directing the THIS keyword 
        (on this.data.username) to the global scope.
        so we must change the function syntax to arrow function */
        this.cleanUp()
        usersCollection.findOne({ username: this.data.username }).then((attemptedUser) => {
            if (attemptedUser && bcrypt.compareSync(this.data.password, attemptedUser.password)) {
                resolve("congraaaaaaats")
            } else {
                reject("invaliiiiiiiiiddd")
            }
        }).catch(function () {
            reject("please try again later, there happened an unnexpected error on our side")
        })
    })
}

User.prototype.register = function () {
    // 1 - validate user data
    this.cleanUp()
    this.validate()

    // 2 - only if there are no validation errors
    // then save user data into database
    if (!this.errors.length) {
        // hash user password
        let salt = bcrypt.genSaltSync(10)
        this.data.password = bcrypt.hashSync(this.data.password, salt)
        usersCollection.insertOne(this.data)
    }


}

module.exports = User