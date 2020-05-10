var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World 2!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Mars 2!\n');
});

app.get('/sun', function (req, res) {
  res.send('Hello Sun 2!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

