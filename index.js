var express = require('express')
var app = express();

var buffer = fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
});

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))



app.get('/', function(request, response) {
  // response.send('Hello World 2!')
  response.send(buffer);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
