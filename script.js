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
