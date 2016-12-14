var express = require('express');
var port=require('./config').port;
var uri=require('./config').uri;
var app = express();
var cors = require('cors');
var morgan = require('morgan');
app.use(morgan('dev'));

var routes=require("./routes");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

var User = require('./models/user.js');
var mongoose = require('mongoose');

mongoose.connect(uri);

var db = mongoose.connection;
db.on('error', function(err){
  console.log('connection failed!', err);
});
db.once('open', function() {
  var user = new User({
   username: 'billie',
   password: 'cccccc'
  });
  user.save();
});

routes(app);

app.get('/api', function(res, req) {
  res.send('Welcome to here!')
})

app.listen(port, function() {
  console.log('Express server is listening on '+ port);
});
