function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

window.addEventListener("load", function clock() {
  console.log("work");
  let clockH1 = document.getElementById("zegar");
  let time = new Date();
  let hours = checkTime(time.getHours());
  let minutes = checkTime(time.getMinutes());
  let seconds = checkTime(time.getSeconds());
  clockH1.innerText = hours + ":" + minutes + ":" + seconds;
  setTimeout(clock, 1000);
});
