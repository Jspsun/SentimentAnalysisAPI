// Bring in our dependencies
var express=require('express')();
var app = express();
const routes = require('./routes');


app.set('port', (process.env.PORT || 5001));
// app.use(express.static(__dirname));

// Connect all our routes to our application
app.use('/', routes);

// Turn on that server!
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
