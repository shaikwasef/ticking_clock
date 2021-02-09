var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

var myVar = setInterval(myTimer,1000);

function myTimer(){
  var date = new Date();
  var message = date.toLocaleTimeString();

  message = message.split(':');

  var hour_hand = parseInt(message[0]);
  var minute_hand = parseInt(message[1]);
  var second_hand = message[2].split(' ');
  second_hand = parseInt(second_hand[0]);
  var x = hour_hand*30 + minute_hand*0.5;
  
  var hour_angle = "rotate("+x+"deg)";
 
  hour.style.transform = hour_angle;

  var minute_angle = "rotate("+minute_hand*(6)+"deg)";
  minute.style.transform = minute_angle;

  var second_angle = "rotate("+second_hand*(6)+"deg)"
  second.style.transform = second_angle;
}
