document.addEventListener("DOMContentLoaded", function () {

  let time = 60;
  const counter = document.getElementById("countdown");

  setInterval(() => {
    if (time > 0) {
      time--;
      counter.innerText = time;
    }
  }, 1000);

});