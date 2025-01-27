const button = document.querySelector('button');
const row = document.querySelector('#row');
const cell = document.querySelector('#cell');
const mine = document.querySelector('#mine');
const leftFlagNumber = document.querySelector('.leftFlagNumber');
const table = document.querySelector('#table');
const tbody = document.createElement('tbody');
table.appendChild(tbody);
const timer = document.querySelector('.timer');
let rowValue;
let cellValue;
let mineValue;
let mineCount = 0;
let firstClicked = 0;
let flagCount;
let a = [];
let openTile = 0;
let time = 0;

//지뢰찾기 시작
const start = () => {
  //시간 재기
  startTime = new Date();
  interval = setInterval(() => {
    time = Math.floor((new Date() - startTime) / 1000);
    timer.textContent = `${time}초`;
  }, 1000);

  //입력값 검증
  rowValue = row.value;
  cellValue = cell.value;
  mineValue = mine.value;
  if (!rowValue || !cellValue || !mineValue) {
    alert('모든 입력창에 값을 입력해주세요.');
    return;
  } else if (rowValue * cellValue - 4 < mineValue) {
    alert('최대 지뢰 개수는 (전체 칸 수 - 4)까지 입니다.');
    return;
  }

  //지뢰찾기를 시작할 게임화면을 생성
  for (let i = 0; i < rowValue; i++) {
    const tr = document.createElement('tr');
    tr.className = `tr${i}`;
    tbody.appendChild(tr);
    for (let j = 0; j < cellValue; j++) {
      const td = document.createElement('td');
      td.className = `td${j}`;
      td.addEventListener('click', tile);
      tr.appendChild(td);
      td.addEventListener('contextmenu', rightClick);
    }
  }
  flagCount = mineValue;
};

button.addEventListener('click', start);

//오른쪽 마우스 클릭시 깃발생성하고 한번 더 클릭 시 깃발이 사라지게 한다.
function rightClick(e) {
  e.preventDefault();
  const element = e.target;
  const tdElement = element.closest('td');
  const existingFlags = tdElement.querySelectorAll('img.flag');
  const mineLocationElement = tdElement.querySelector('.mineLocation');
  if (
    flagCount > 0 &&
    existingFlags.length === 0 &&
    !element.classList.contains('opened')
  ) {
    const flagImg = '<img src="깃발.png" class="flag">';
    if (mineLocationElement) {
      mineLocationElement.insertAdjacentHTML('beforeend', flagImg);
    } else {
      tdElement.innerHTML += flagImg;
    }
    a.push(tdElement);
    flagCount--;
  } else if (a.includes(tdElement) && existingFlags.length === 1) {
    existingFlags.forEach((flag) => flag.remove());
    flagCount++;
  }

  leftFlagNumber.innerHTML = `<img src="깃발.png" class="leftFlag">: ${flagCount}개`;
}

//타일 클릭 시 지뢰위치인지 아닌지 판단하기
function tile(event) {
  //타일을 처음으로 클릭시 지뢰를 생성하지 않는다.
  if (firstClicked === 0) {
    mineCreate();
    firstClicked++;
  }

  const mineLocation = event.target;
  if (mineLocation.classList.contains('mineLocation')) {
    gameEnd(mineLocation);
  } else {
    // 정상 타일 주변 8타일 확인
    checkMine(mineLocation);
  }
}

//지뢰 생성
function mineCreate() {
  const minePositions = new Set();

  while (minePositions.size < mineValue) {
    let randomTr = Math.floor(Math.random() * rowValue);
    let randomTd = Math.floor(Math.random() * cellValue);
    const position = `${randomTr},${randomTd}`;
    minePositions.add(position);
  }

  minePositions.forEach((position) => {
    const [randomTr, randomTd] = position.split(',');
    const selectedTr = document.querySelector(`.tr${randomTr}`);
    const selectedTd = selectedTr.querySelector(`.td${randomTd}`);
    const mineLocation = document.createElement('div');
    mineLocation.classList.add('mineLocation');
    mineLocation.style.width = '20px';
    mineLocation.style.height = '20px';
    selectedTd.appendChild(mineLocation);
  });
}

//지뢰 클릭 시 게임 종료 (tile함수에서 mineLocation을 인자로 전달받았다.)
function gameEnd(mineLocation) {
  const image = document.createElement('img');
  image.src = '지뢰.png';
  image.classList.add('mineIcon');
  mineLocation.appendChild(image);
  setTimeout(() => {
    alert('지뢰를 선택해서 게임이 종료되었습니다.');
    document.location.reload();
  }, 300);
}

//정상 타일 주변에 지뢰가 있는지 확인하는 함수
function checkMine(tile) {
  if (!tile || tile.className === undefined) {
    return;
  } else if (tile.className.includes('opened')) {
    return;
  }
  const tileClass = tile.className;
  const tileLeft = tile.previousSibling;
  const tileRight = tile.nextSibling;
  const tileParentRight = tile.parentNode.nextSibling;
  const tileParentLeft = tile.parentNode.previousSibling;
  countMineLocations(tileLeft);
  countMineLocations(tileRight);
  let tileDown, tileDownLeft, tileDownRight, tileUp, tileUpLeft, tileUpRight;

  if (tileParentRight !== null) {
    tileDown = tileParentRight.querySelector('.' + tileClass);
    tileDownLeft = tileDown.previousSibling;
    tileDownRight = tileDown.nextSibling;
    countMineLocations(tileDown);
    countMineLocations(tileDownLeft);
    countMineLocations(tileDownRight);
  }

  if (tileParentLeft !== null) {
    tileUp = tileParentLeft.querySelector('.' + tileClass);
    tileUpLeft = tileUp.previousSibling;
    tileUpRight = tileUp.nextSibling;
    countMineLocations(tileUp);
    countMineLocations(tileUpLeft);
    countMineLocations(tileUpRight);
  }
  tile.classList.add('opened');
  openTile++;
  const tileDirection = [
    tileLeft,
    tileRight,
    tileDown,
    tileDownLeft,
    tileDownRight,
    tileUp,
    tileUpLeft,
    tileUpRight,
  ];
  if (mineCount === 0) {
    for (let i of tileDirection) {
      checkMine(i);
    }
  } else {
    tile.innerHTML = mineCount;
  }
  mineCount = 0;

  //승리로직
  if (openTile >= rowValue * cellValue - mineValue) {
    if (time <= 1) {
      document.location.reload();
    } else {
      setTimeout(() => {
        alert(`승리했습니다! ${time}초가 걸렸습니다.`);
        document.location.reload();
      }, 300);
    }
  }
}

//주변에 지뢰 개수 확인
function countMineLocations(clickedTile) {
  const mineLocationSelector = '.mineLocation';
  if (!clickedTile || clickedTile.className === undefined) {
    return;
  } else if (clickedTile.className.includes('opened')) {
    return;
  }

  const adjacentMineLocation = clickedTile.querySelector(mineLocationSelector);

  if (adjacentMineLocation) {
    mineCount++;
  } else {
    return;
  }
  return mineCount;
}
