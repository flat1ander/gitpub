const express = require('express')
const app = express()
const models = require('./models/drinks')
const drinks = models.drinks

app.get('/', (req, res) => {
    res.send("Welcome to the GitPub App")
})

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {drinks})
})

app.get('/drinks/:id', (req, res) => {
    res.send(req.params.id)
})





















app.listen('3000', () => {
    console.log('Listening on port 3000')
})