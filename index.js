const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateclock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }
    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    
    setTimeout(() => {
        updateclock()
    }, 1);
};

updateclock();


function Calender(){
let day = document.getElementById('day');
let date=document.getElementById('date');
let mon=document.getElementById('month');
let yea=document.getElementById('year');
const dayname=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]
let get = new Date().getDay();
let days=dayname[get]
day.innerText= days;
// if (get == 0) {
//     day.innerText = "SUNDAY";
// }
// else if (get == 1) {
//     day.innerText = "MONDAY";
// }
// else if (get == 2){
//     day.innerText = "TUESDAY";
// }
// else if (get == 3) {
//     day.innerText = "WEDNESDAY";
// }
// else if (get == 0) {
//     day.innerText = "THURSDAY";
// }
// else if (get == 0) {
//     day.innerText = "FRIDAY";
// }
// else{
//     day.innerText = "SATURDAY";
// };

//Calender Functionlity on

let d=new Date().getDate();
let mo=new Date().getMonth();
let months=["1","2","3","4","5","6","7","8","9","10","11","12"]
let mont=months[mo]
let ye=new Date().getFullYear();

mont = mont < 10 ? "/" + "0" + mont + "/" : mont;

date.innerText = d;
mon.innerText = mont;
yea.innerText = ye;


setTimeout(()=>{
    Calender()
}, 1000);
};
Calender();

//Dark Mode Button
const da=document.getElementById("btn");
document.body.style.backgroundColor="";
da.innerHTML="Enable Dark"

function dark(){
    if(document.body.style.backgroundColor==""){
da.innerHTML="Enable Light"
        let dv={
       bg : document.body.style.backgroundColor="Black",
       clr: document.body.style.color="black",
}
}
else{
    da.innerHTML="Enable Dark"
    let dv={
        bg : document.body.style.backgroundColor="",
        clr: document.body.style.color="white",
}
}
};
