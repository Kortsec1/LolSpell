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
var ft = 0;
var tmp = 0;
var owner, spell;

function startprt() {
  setInterval(prtime, 1000);
}

function prtime() {
  s = s + 1;
  if (s >= 60) {
    m = m + 1;
    s = 0;
  }

  ft = add0(m) + "." + add0(s);
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

function addtime(str) {
  switch (str) {
    case "tel":
      tmp = add0(m+7) + add0(s);
      break;

    case "flsh":
      tmp = add0(m+5) + add0(s);
      break;

    case "ign":
      tmp = add0(m+3) + add0(s);
      break;

    case "heal":
      tmp = add0(m+4) + add0(s);
      break;

    case "smi":
      tmp = add0(m+1) + add0(s);
      break;

    default:
      tmp = "9999";
      break;
  }
}

function savet(owner, spell) {
  addtime(spell);
  document.getElementById(owner).innerHTML = tmp;
}
