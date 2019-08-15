const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const mongoose = require("mongoose")

mongoose
.connect(
    'mongodb+srv://seijihg:1986@ladybugair-kwugm.mongodb.net/pokemontcg?retryWrites=true&w=majority', { useNewUrlParser: true }
    )
.then(result => {
    app.listen(8080)
})
.catch(err => console.log(err))

//-- CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Origin', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Origin', 'Content-Type, Authorization')
    next()
})
//--

//-- Routes for API version 1
const apiv1 = "/api_v1"

const usersRoutes = require('./routes/users')
app.use(apiv1, usersRoutes)

//--