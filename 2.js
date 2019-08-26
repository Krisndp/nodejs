var express = require('express');
var body = require('body-parser');

var app = express();
var url = body.urlencoded({extended: false});

app.get('/contact', (req, res) => {
  console.log(req.query)
  res.send(`you sent`)
})

app.get('/', (req, res) => {
  res.send(`you sent`)
})

app.post('/', url, (req, res) => {
  console.log(req.body)
  res.send(`you sent`)
})
app.listen(8880)