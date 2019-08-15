const User = require("../models/user")

exports.postUser = (req, res, next) => {
    const username = req.body.username
    const score = req.body.score

    const user = new User({
        username: username,
        score: score
    })
    user.save()
    .then()
}