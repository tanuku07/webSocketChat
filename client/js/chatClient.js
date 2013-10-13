var ws = new WebSocket('ws://localhost:9090');
ws.onopen = function(data) {
  console.log("Connected to Server localhost");
};
ws.onmessage = function(data) {
  console.log("Message received: ", data);
  var msgToDisplay = '<p>Time =>'+new Date().getHours()+':'+new Date().getMinutes()+' message-> '+data.data+'</p>';
  $('#message').append(msgToDisplay);
};
ws.onclose = function(err){
  console.log(err);
  $('#connection').show();
};
function sendToServer(message) {
  if ('' == $('#input_msg').val() || ws.CLOSED) {
    $('#e_alert').show();
  } else {
    ws.send(message);
    $('#input_msg').val('');
    $('#e_alert').fadeOut("slow");
  }
}
$( document ).ready(function() {
  $('#e_alert').hide();
  $('#connection').hide();
});