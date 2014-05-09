var fs = require ('fs');
var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
/*
fs.readFileSync("index.html", function (err, data) {
    if (err) throw err
    // console.log("debug");
    console.log(data);
});
*/

app.get('/', function(request, response) {
    response.send('Hello World 2!');
    // response.send(buffer.toString);
})

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})
