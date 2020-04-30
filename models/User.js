const validator = require('validator')

let User = function (data) {
    this.data = data
    this.errors = []
}

User.prototype.validate = function () {
    if (this.data.username == "") {this.errors.push("you must provide a username")}
    if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {this.errors.push("username can only contain letters and numbers")}
    if (!validator.isEmail(this.data.email)) {this.errors.push("you must provide a valid email")}
    if (this.data.password == "") {this.errors.push("you must provide a password")}
    if (this.data.password.length > 0 && this.data.password.length < 12) {this.errors.push("password must be at least 12 characters")}
    if (this.data.password.length > 100) {this.errors.push("password cannot exceed 100 characters")}
    if (this.data.password.username > 0 && this.data.username.length < 3) {this.errors.push("Username must be at least 3 characters")}
    if (this.data.password.username < 100) {this.errors.push("username cannot exceed 100 characters")}
}

User.prototype.register = function () {
    // 1 - validate user data
    this.validate()

    // 2 - only if there are no validation errors
    // then save user data into database



}

module.exports = User