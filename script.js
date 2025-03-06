function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

window.addEventListener("load", function clock() {
    console.log("work")
    let clockH1 = document.getElementById("zegar");
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds)
    clockH1.innerText = hours + ":" + minutes + ":" + seconds;
    setTimeout(clock, 1000);
    
})
