var express = require('express');
var port=require('./config').port;
var app = express();

app.get('/api', function(res, req) {
  res.send('Welcome to here!')
})

app.listen(port, function() {
  console.log('Express server is listening on '+ port);
});
