const postsCollection = require('../db').db().collection("posts")
const ObjectID = require('mongodb').ObjectID

let Post = function (data, userid) {
    this.data = data
    this.errors = []
    this.userid = userid
}

Post.prototype.cleanUp = function () {
    if (typeof(this.data.title) != "string") {this.data.title = ""}
    if (typeof(this.data.body) != "string") {this.data.body = ""}

    // get rid of any incomom property
    this.data = {
        title: this.data.title.trim(),
        body: this.data.body.trim(),
        createdDate: new Date(), 
        author: ObjectID(this.userid)
    }
}

Post.prototype.validate = function () {
    if (this.data.title == "") {this.errors.push("you must provide a titleeee")}
    if (this.data.body == "") {this.errors.push("you must provide a content for the pooost")}
}

Post.prototype.create = function () {
    return new Promise((resolve, reject) => {
        this.cleanUp()
        this.validate()
        if (!this.errors.length) {
            // save post on database
            postsCollection.insertOne(this.data).then(() => {
                resolve()
            }).catch(() => {
                this.errors.push("please try again lateeeer")
                reject(this.errors)
            })
            resolve()
        } else {
            reject(this.errors)
        }
    })
}

module.exports = Post