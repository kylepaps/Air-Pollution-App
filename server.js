const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
require('dotenv').config()
const port = process.env.PORT

const router = require('./routes/routes')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', router)

app.listen(port, () => console.log(`Listening on port ${port}`));

