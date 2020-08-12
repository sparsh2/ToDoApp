var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

var port = 3000;

//set up view engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controller
todoController(app);

//listen to port
app.listen(port);
console.log('Listening to port ' + port);