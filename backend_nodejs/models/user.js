const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    score: {
        type: Number,
        required: true,
    },
}, {timestamps: true})

module.exports = mongoose.model("User", userSchema)