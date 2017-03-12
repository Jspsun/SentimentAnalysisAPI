var express = require('express');
var app = express();
const routes = require('./routes');

app.set('port', (process.env.PORT || 1337));

app.use('/', routes);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
