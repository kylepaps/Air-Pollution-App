const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT

const router = require('./routes/routes')

app.use('/', router)

app.listen(port, () => console.log(`Listening on port ${port}`));

