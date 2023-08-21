const text = document.querySelector("input");
const button = document.querySelector("button");
const logs = document.querySelector("#logs");
let strike = 0;
let ball = 0;
let out = 1;
let plays = 10;
const tries = [];

//엔터 키 적용
text.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});

//정답인 배열을 랜덤으로 생성하기
let n = new Set();
while (n.size < 4) {
  let num = Math.floor(Math.random() * 10).toString();
  n.add(num);
}
let num = [...n];
console.log(num);

button.addEventListener("click", start);

function start() {
  let word = text.value;
  if (checkInput(word) === false) {
    text.value = "";
    return;
  }
  tries.push(text.value);

  //정답과 내가 추측한 값을 비교
  for (i = 0; i < 4; i++) {
    if (num[i] === word[i]) {
      strike++;
    } else {
      for (j = 0; j < 4; j++) {
        if (num[i] === word[j]) {
          ball++;
        }
      }
    }
  }

  //스트라이크와 볼의 개수에 따라 결과가 결정 + 홈런 또는 3아웃일 때 게임 종료
  if (strike === 4) {
    logs.innerHTML = "축하합니다. 승리했습니다.";
    restart();
  } else if (strike === 0 && ball === 0) {
    progress();
  } else {
    progress();
  }
  strike = 0;
  ball = 0;
}

//내가 규칙에 맞게 작성했나 검증
function checkInput(input) {
  if (isNaN(input)) {
    alert("숫자를 입력해주세요.");
    return false;
  }
  if (input.length !== 4) {
    alert("4자리 숫자를 입력해 주세요.");
    return false;
  }
  if (new Set(input).size !== 4) {
    alert("중복되지 않게 입력해 주세요.");
    return false;
  }
  if (tries.includes(input)) {
    alert("이미 시도한 값입니다.");
    return false;
  }
  return true;
}

//진행과정 확인 후 화면 출력
function progress() {
  plays--;
  if (plays === 0 || out === 3) {
    logs.innerHTML = `패배! 정답은 ${num.join("")}`;
    restart();
  } else if (strike === 0 && ball === 0) {
    logs.append(
      `${text.value} : ${out}아웃 ${plays}번 남았습니다.`,
      document.createElement("br")
    );
    out++;
  } else {
    logs.append(
      `${text.value} : ${strike}스트라이크 ${ball}볼 ${plays}번 남았습니다.`,
      document.createElement("br")
    );
  }
}

//일정시간 후 새로고침
function restart() {
  setTimeout(() => {
    location.reload();
  }, 3000);
}
