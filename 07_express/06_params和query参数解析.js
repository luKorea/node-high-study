const express = require('express')

const app = express()


app.post('/params/:id/:code', (req, res) => {
  console.log(req.params);
  res.json(req.params)
})

app.post('/query', (req, res) => {
  console.log(req.query);
  res.json(req.query)
})

app.listen(9090, () => {
  console.log('express server is open');
})