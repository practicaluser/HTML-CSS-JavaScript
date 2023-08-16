const wrapper = document.querySelector('#wrapper');
let shuffled = [];
const colors = ['red', 'orange', 'yellow', 'green', 'white', 'pink'];
let colorCopy = [...colors, ...colors];
let clicked = [];
let completed = [];

//시작
start();

function start() {
  shuffle();
  for (let i = 0; i < 12; i++) {
    cardMake(i);
  }

  const cards = [...document.querySelectorAll('.card')];
  cards.forEach((card) => {
    card.classList.add('flipped');
    card.addEventListener('click', click);
  });

  setTimeout(() => {
    cards.forEach((card) => card.classList.remove('flipped'));
  }, 3000);
}

//카드 색 셔플해서 랜덤으로 정하기
function shuffle() {
  for (let i = 0; colorCopy.length > 0; i++) {
    const randomNum = Math.floor(Math.random() * colorCopy.length);
    shuffled.push(...colorCopy.splice(randomNum, 1));
  }
}

//카드 생성
function cardMake(i) {
  const card = document.createElement('div');
  card.className = `card ${i}`;
  wrapper.appendChild(card);
  const cardInner = document.createElement('div');
  cardInner.className = 'card-inner';
  card.appendChild(cardInner);
  const cardFront = document.createElement('div');
  cardFront.className = 'card-front';
  cardInner.appendChild(cardFront);
  const cardBack = document.createElement('div');
  cardBack.className = 'card-back';
  cardBack.style.backgroundColor = shuffled[i];
  cardInner.appendChild(cardBack);
  return card;
}

//클릭 시 함수 구현
function click(event) {
  if (completed.includes(this) || clicked[0] === this) {
    return;
  }
  this.classList.add('flipped');
  clicked.push(this);
  const firstBackColor =
    clicked[0].querySelector('.card-back').style.backgroundColor;

  //clicked 배열 길이가 2가 되지 않으면 함수를 다시 한 번 실행시키기 위해서 return 붙였다.
  if (clicked.length !== 2) {
    return;
  }
  const secondBackColor =
    clicked[1].querySelector('.card-back').style.backgroundColor;

  //클릭한 카드가 같은지 검증하기
  setTimeout(() => {
    if (firstBackColor === secondBackColor) {
      completed.push(...clicked);
      clicked = [];
      if (completed.length === 12) {
        alert('축하합니다! 카드를 모두 맞추셨습니다.');
        completed = [...completed];
        completed.forEach((card) => card.classList.remove('flipped'));
        setTimeout(() => {
          document.location.reload();
        }, 2000);
      }
    } else {
      clicked = [...clicked];
      clicked.forEach((card) => card.classList.remove('flipped'));
      clicked = [];
    }
  }, 350);
}
