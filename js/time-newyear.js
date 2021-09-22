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
