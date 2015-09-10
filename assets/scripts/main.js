/*function tick(){
  console.log(new Date());
}
tick()*/
function checkTime(i){
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var mRaw = today.getMinutes();
  var sRaw = today.getSeconds();
  //add a zero in front of numbers<10
  var m = checkTime(mRaw);
  var s = checkTime(sRaw);
  //creating the progress bar
  var secondPercentage = (s/60)*100;
  /*console.log(secondPercentage);*/
  var bar= document.querySelector('hr');
  bar.style.width= secondPercentage + '%';
  //targeting the span and creakting the clock
  document.querySelector('.js-clockbox').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function () {
    startTime()
  }, 1000);

//converting 's' into a hexidecimal number and target body for BG color
function padding(i){
  var hex= i.toString(16)
  if (i < 16) {
    hex = "0" + hex;
  }
  return hex;
}
var hexstring = padding(h) + padding(mRaw) + padding(sRaw);
document.querySelector('.js-hexbox').innerHTML ="#" + hexstring
document.body.style.backgroundColor = "#" + hexstring;
}
startTime();
