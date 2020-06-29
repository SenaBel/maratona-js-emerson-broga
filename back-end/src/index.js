const express = require('express')

const authController = require('./controllers/auth')

const app = express()

app.use('/auth', authController)

app.get('/', (req, res) => {
    return res.json('Api is Running!')
})

app.listen(3001, () => {
    console.log('Server running on port 3001')
})

