//이미지 관련 변수
const button = document.querySelectorAll("button");
const image = document.querySelector("#image");
const imgSource = "./rsp.png";
const rspX = ["0", "-220px", "-440px"];
const rps = ["scissors", "rock", "paper"];
let computerChoice = [];
let n = 0;
//점수 관련 변수
const liveScore = document.querySelector(".score");
let computerScore = 0;
let myScore = 0;

//가위 바위 보 점수 설정
const score = {
  scissors: 1,
  rock: 0,
  paper: -1,
};

//버튼 클릭시 점수 계산
button.forEach((btn) => {
  btn.addEventListener("click", buttonClick);
});

function buttonClick() {
  const clickedButton = event.target;
  const className = clickedButton.classList;
  const myChoice = Array.from(className).join("");
  const scoreGap = score[myChoice] - score[computerChoice];
  if (scoreGap === 0) {
    liveScore.innerHTML = `무승부 ${myScore}:${computerScore}`;
  } else if ([-1, 2].includes(scoreGap)) {
    myScore++;
    liveScore.innerHTML = `나의 승리 ${myScore}:${computerScore}`;
  } else {
    computerScore++;
    liveScore.innerHTML = `나의 패배 ${myScore}:${computerScore}`;
  }

  if (myScore === 3) {
    alert(`나의 승리 ${myScore}:${computerScore}`);
    document.location.reload();
  } else if (computerScore === 3) {
    alert(`나의 패배 ${myScore}:${computerScore}`);
    document.location.reload();
  }
}

//이미지 자유자재로 교체
const turnover = setInterval(() => {
  image.style.background = `url(${imgSource}) ${rspX[n]} 0 / auto 200px`;
  if (computerChoice.length === 1) {
    computerChoice = [];
  }
  computerChoice.push(rps[n]);
  n = (n + 1) % 3;
}, 50);
