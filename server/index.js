var express = require('express');
var port=require('./config').port;
var uri=require('./config').uri;
var app = express();

var User = require('./models/user.js');
var mongoose = require('mongoose');

mongoose.connect(uri);

var db = mongoose.connection;
db.on('error', function(err){
  console.log('connection failed!', err);
});
db.once('open', function() {
  var user = new User({
   username: 'bille',
   password: 'ssssss'
  });
  user.save();
});



app.get('/api', function(res, req) {
  res.send('Welcome to here!')
})

app.listen(port, function() {
  console.log('Express server is listening on '+ port);
});
