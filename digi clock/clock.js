const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("min");
const secondEl = document.getElementById("sec");
const amE1 = document.getElementById("am");

function updtclock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = "AM";

    if (h > 12) {
        h = h - 12;
        am = "PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    amE1, (innerText = am);
    setTimeout(()=>{
        updtclock()
    },1000)

}

updtclock();