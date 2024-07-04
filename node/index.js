const express = require('express')  
const app = express()
const SERVER_PORT = process.env.SERVER_PORT || 8080

app.get('/', (req, res) => {
})

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`)
})