function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

window.addEventListener("load", function clock() {
  let clockDiv = document.getElementById("zegar");
  let time = new Date();
  let hours = checkTime(time.getHours());
  let minutes = checkTime(time.getMinutes());
  let seconds = checkTime(time.getSeconds());
  if(clockDiv.children.length !== 1){
    let clockH1 = document.createElement("h1");
    clockH1.innerText = hours + ":" + minutes + ":" + seconds;
    clockDiv.appendChild(clockH1);
  }
  else{
    clockDiv.children[0].innerText = hours + ":" + minutes + ":" + seconds;
  }
  setTimeout(clock, 1000);
});

