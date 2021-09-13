const d1 = new Date();
console.log(d1); //Tue Sep 07 2021 13:42:55 GMT+0300 (Israel Daylight Time)

// milliseconds
const d2 = new Date(1630916008);
console.log(d2); //Mon Jan 19 1970 23:01:56 GMT+0200 (Israel Standard Time)

// from str
const d3 = new Date("2021 sep 7");
console.log(d3); //Tue Sep 07 2021 00:00:00 GMT+0300 (Israel Daylight Time)
console.log(typeof d3); //object

//from  str to object
const d4 = new Date("dec 13 1991 13:02:40 GMT+0300");
console.log(d4); //Fri Dec 13 1991 12:02:40 GMT+0200 (Israel Standard Time)
console.log(d4.getDay()); //5
console.log(d4.getDate()); //13
console.log(d3.getDate()); //7

const diff = d3 - d4;
const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24) / 365);
console.log(diffDays);

document.querySelector(".out-1").innerHTML = diffDays + " years";
// 29 years

document.querySelector(".out-2").innerHTML = d4.toUTCString();
// Fri, 13 Dec 1991 10:02:40 GMT

document.querySelector(".out-3").innerHTML = d4.toDateString();
// Fri Dec 13 1991

document.querySelector(".out-4").innerHTML = d4.toISOString();
// 1991-12-13T10:02:40.000Z

//metods
const d20 = new Date();
console.log(d20.getFullYear()); // 2021
console.log(d20.getMonth()); // 8    this is september because 0,1,2 to 11
console.log(d20.getDate()); // 7    date today
console.log(d20.getDay()); // 2    (thu)  day of the week, start -sunday = 0, sat = 6.
console.log(d20.getHours()); // 16

console.log(d20.getTime()); // 1631021330294  - unixTime
console.log(Date.now()); // 1631021436782 - unixTime

function addLedingZero(d) {
  return d < 10 ? "0" + d : d;
}
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dateDate = new Date(1601000430082);

function getUserTime(t) {
  let Y = t.getFullYear();
  let M = addLedingZero(t.getMonth() + 1);
  let D = addLedingZero(t.getDate());
  let w = days[t.getDay()];
  let h = addLedingZero(t.getHours());
  let m = addLedingZero(t.getMinutes());
  console.log(Y, M, D, w, h, m); //2020 "09" 25 "Friday" "05" 20
  return `${Y}.${M}.${D}  ${h}:${m} (${w})`;
}

console.log(getUserTime(dateDate));

const dateNewYear = new Date("Jan 1 2022 00:00:00");

function counts() {
  let nowDay = new Date();
  gap = dateNewYear - nowDay;

  if (gap < 0) {
    document.querySelector(".group").innerText =
      "sorry... The promotion is over. Happy New year!";
  } else {
    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;

    document.querySelector(".day").innerText = days + " days";
    document.querySelector(".hour").innerText = hours + " hours";
    document.querySelector(".minute").innerText = minutes + " minutes";
    document.querySelector(".second").innerText = seconds + " seconds";
  }
}
counts();

setInterval(counts, 1000);
