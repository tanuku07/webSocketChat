var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 9090});
wss.on('connection', function(ws) {
  ws.on('message', function(message) {
    console.log('received: %s', message);
  });
  ws.send('something');
  ws.on('error', function(message){
    console.log("Error message come :", message);
  });
});