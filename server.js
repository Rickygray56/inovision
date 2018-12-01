var express = require('express');
var app = express();
var port = process.env.PORT || 5656;
var morgan = require('morgan');
var router = express.Router();
var path = require('path');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.listen(port, function() {
    console.log('Running server on port ' + port);
});