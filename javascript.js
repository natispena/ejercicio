var express = require('express');
var app = express();

require('shelljs/global');

app.get('/', function(req, res) {
  exec('adb ' + req.query.cmd, 
      {silent: true},
      function(code, stdout, stderr) {
         res.send({'code': code, 'stdout': stdout, 'stderr': stderr});
      });
});

app.get('/:cmd', function(req, res) {
  // res.send(exec('adb ' + req.params.cmd));
  exec('adb ' + req.params.cmd, 
      {silent: true},
      function(code, stdout, stderr) {
         res.send({'code': code, 'stdout': stdout, 'stderr': stderr});
      });
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});