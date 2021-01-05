const express = require('express')
const app = express()
const port = 5000

app.get('/nume', (req, res) => {
  res.send('Serban')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})