let button = document.querySelector("button");
let shuffle = [];
let result = [];
let count = 0;

button.addEventListener("click", start);

function start() {
  //1~45까지 숫자를 무작위로 배치한 배열을 만듬
  while (shuffle.length < 45) {
    let num = Math.floor(Math.random() * 45 + 1);
    if (!shuffle.includes(num)) {
      shuffle.push(num);
    }
  }

  //무작위로 나눈 배열을 6개의 숫자를 하나의 배열로 해서 이중배열을 만듦
  for (let i = 0; i < shuffle.length; i += 6) {
    let subset = shuffle.slice(i, i + 6);
    result.push(subset);
  }

  //길이가 부족한 배열을 보충(1~45의 숫자이므로 6개씩 뽑으면 숫자3가 부족)
  for (let i = 0; i < 3; i++) {
    let num = Math.floor(Math.random() * 45 + 1);
    result[result.length - 1].push(num);
  }

  //result 화면에 표시 randomNumber
  for (i = 0; i < 7; i++) {
    let win = document.createElement("div");
    win.className = `win number ${i}`;
    document.querySelector(".randomNumber").appendChild(win);
    win.textContent = result[0][i];
  }
  count += 1;
}
