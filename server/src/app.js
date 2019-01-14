console.log('Hello')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
console.log('Getting config next ')
// const config = require('./config')
console.log('Got it')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync()
    .then(() => {

        app.listen(process.env.PORT || 8081)
        console.log('Server started on port ${config.port}')
    })