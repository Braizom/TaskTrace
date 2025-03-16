const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()

const corsOption = {
    origin: 'http://localhost:8083',
    credentials: true
}
app.use(cookieParser())
app.use(cors(corsOption))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const db = require('./app/models')
db.connex.sync()

require('./app/routes/user.route')(app)
require('./app/routes/theme.route')(app)
require('./app/routes/list.route')(app)
require('./app/routes/element.route')(app)

const PORT = 8082
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
