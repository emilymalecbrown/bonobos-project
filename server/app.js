var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static('./public'));
app.use('/api', require('./api'));

app.get('/', (req, res, next) => {
  res.sendfile('./public/index.html');
});

app.listen(app.get('port'), () => {
  console.log("Node app is running at localhost:" + app.get('port'));
});
