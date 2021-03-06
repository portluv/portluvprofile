const express = require('express');
const app = express();
const server = require('http').Server(app);


// ===========  Includes  =================
app.use('/', express.static(__dirname));
app.use('/css', express.static(__dirname + "/public/css/"));
app.use('/scss', express.static(__dirname + "/public/scss/"));
app.use('/fonts', express.static(__dirname + "/public/fonts/"));
app.use('/images', express.static(__dirname + "/public/images/"));
app.use('/js', express.static(__dirname + "/public/js/"));



// ============  Routes  ==================
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/view/index.html');
});

app.get('/downloads', function(req, res){
  var file = __dirname + '/public/img/downloads/dearfarah.jpg';
  res.download(file)
});

server.listen((process.env.PORT || 3000), function(){
  console.log('Server on port ' + (process.env.PORT || 3000));
});