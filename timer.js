/*
function prdate() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const prtime = add0(h) + "." + add0(m) + "." + add0(s)
  document.getElementById('nowTime').innerHTML = prtime;
}

function add0(num) {
  if (num < 10) {
    return "0" + num;
  }
  else {
    return num;
  }
}

setInterval(prdate, 100);
*/

var s = 0;
var m = 0;

function startprt() {
  setInterval(prtime, 1000);
}

function prtime() {
  s = s + 1;
  if (s >= 60) {
    m = m + 1;
    s = 0;
  }

  var ft = add0(m) + "." + add0(s);
  document.getElementById('nowTime').innerHTML = ft;
}

function add0(num) {
  if (num < 10) {
    return "0" + num;
  }
  else {
    return num;
  }
}
