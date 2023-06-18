let startcount = 0;
let loadingtext = document.querySelector(".loadingtext");
let counter = document.querySelector(".counter");

setInterval(function () {
  finalcount = startcount;
  if (startcount == 101) {
    clearInterval(); //setInterval() 함수에 의해 설정된 반복 실행을 멈추는 역할
    loadingtext.innerText = "Loading Completed";
    loadingtext.style.color = "#860000";
    counter.style.color = "#860000";
  } else {
    startcount++;
    counter.innerText = finalcount + "%";
  }
}, 100);
