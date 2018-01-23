var express = require('express');
// var reload = require('reload');
var app = express();
var dataFile = require('./data/data.json');
// var io = require('socket.io')();
var multer  = require('multer');
var bodyParser = require('body-parser');

app.set('port',process.env.PORT||3000);
app.set('appData', dataFile);
// app.set('view engine', 'ejs');
// app.set('views', 'app/views');

// app.use(express.static('app/public'));
app.use(require('./routes/products'));
// app.use(require('./routes/category'));

// app.use(require('./routes/category'));


// var server = app.listen(app.get('port'),function(){
//    console.log('Listening on port ' + app.get('port'));
// });

app.listen(3000, function() {
  console.log('listening on 3000')
});

app.get('/', function (request, response) {

   response.send('Hume sales');

  // do something here
});

// io.attach(server);
// io.on('connection', function(socket) {
//   socket.on('postMessage', function(data) {
//     io.emit('updateMessages', data);
//   });
// });

// reload(server, app);
