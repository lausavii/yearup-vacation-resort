"use strict"

let extraPerDay = 0;

const tollTag = document.getElementById("tollTag")
console.log(tollTag)
if (tollTag === true) {
extraPerDay += 3.95;
}
const gps = document.getElementById("gps")
if (gps === true) {
extraPerDay += 4.95;
}
const roadside = document.getElementById("roadside")
if (roadside === true) {
extraPerDay += 2.95;
}
console.log(extraPerDay)

const autoRadioBtn = document.getElementById("auto");
const homeRadioBtn = document.getElementById("home");
let basePremium = 0;
if (autoRadioBtn) {
    basePremium = 175.00;
}
else if (homeRadioBtn) {
    basePremium = 395.00;
}
else { // it must be life!
    basePremium = 225.00;
}