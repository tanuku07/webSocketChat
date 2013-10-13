var ws = new WebSocket('ws://localhost:9090');
ws.onopen = function(data) {
  console.log("Connected to Server localhost");
};
ws.onmessage = function(data) {
  console.log("Message received: ", data);
};
