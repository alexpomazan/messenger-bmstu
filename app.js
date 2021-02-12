const express = require('express')
const config = require('config')

const PORT = config.get('port') || 5000

const app = express()
app.use('/api/auth', require('./routes/auth.routes'))

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
