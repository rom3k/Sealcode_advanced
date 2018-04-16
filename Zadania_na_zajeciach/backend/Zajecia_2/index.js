var express =  require("express");
var bodyParser = require("body-parser");
var fs = require('fs');
var app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var myJson = require('./messages.json');

app.get('/messages', (req, res) => {
  res.json(myJson);
});

app.post('/messages', (req, res) => {
    fs.readFile('./messages.json', 'utf-8', (err, data) => {
      if (err) throw err;
      myJson = JSON.parse(data);
      req.body.id = myJson.length + 1;
      myJson.push({"id": req.body.id, "content": req.body.content, "from": req.body.from, "to": req.body.to});
      fs.writeFile('./messages.json', JSON.stringify(myJson), (err) => {
        if (err) throw err;
        res.setHeader("Content-Type", "text/plain");
        res.write('\nWyslales:\n');
        res.end(JSON.stringify(req.body, null, 2));
      });
    });
});

app.get('/messages:id', (req, res) => {
  fs.readFile('./messages.json', 'utf-8', (err, data) => {
    if (err) throw err;
    var id = req.params.id;
    id = id.slice(1);
    parseInt(id, 10);
    myJson = JSON.parse(data);
    res.json(myJson[id - 1]);
  });
});

app.listen(777);

