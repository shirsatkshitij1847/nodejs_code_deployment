const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/deployment', (req, res) => {
  res.json({ message: 'Deployment successful!' })
})

app.get('/production', (req, res) => {
  res.json({ message: 'Deployment done in production!' })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})