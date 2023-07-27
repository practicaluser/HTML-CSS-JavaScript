승리조건
if (flagCount === 0 && mineFlaged == mineValue) {
                    alert('승리했습니다.');
}
mineValue가 '1'이런 문자열 형태여서 ===로 하면 안된다.


지뢰찾기 오른쪽 마우스 클릭시 로직(최고난이도)


지뢰찾기 주변 칸 한번에 열기(재귀 활용)
-주의
--블록 내에 선언되면 그 블록 안에서 밖에 변수를 활용하지 못하므로 특정 조건하에서만 변수가 에러나지 않고 사용할 수 있어 블록 내에서만 선언했다면 일단 선언은 외부에하고 실제 내용은 블록 안에서 만드는 것이 효율적이다
--if (!tile || tile.className === undefined ) {
                return;
            } else if(tile.className.includes('opened')) {
                return;
            }


주의
tile.classList.add('opened'); O
tile.classList.add = 'opened'; X

//오른쪽 마우스 클릭시 깃발생성하고 한번 더 클릭 시 깃발이 사라지게 한다.(최고난이도)
appendchild를 제거하고 추가하는 방식으로 구현하려고 했는데 잘 안됐다(해당 변수를 찾을 수 없다고 나옴)
innerHTML으로 내용을 붙였다 지웠다 하는 방식으로 구현, 칸 안에 있는 깃발을 오른쪽으로 클릭하면 깃발이 추가로 생성되서 오른쪽 클릭의 위치를 잘못 클릭하는 경우가 많아서, 위치를 변수를 만들어서 고정시켰다.

스코프문제
td.addEventListener('contextmenu',rightClick);

function rightClick(e) {
            e.preventDefault();
            const image = document.createElement('img');
            image.src = "깃발.png";
            image.classList.add("flag");
            td.appendChild(image);
}
-td is not defined 오류가 나온다.
-해결책  e.target.appendChild(image);

개발자도구 실행하는 도중에는 오른쪽 마우스를 금지해도 오른쪽 마우스가 실행된다.

화면에 특정 문자 출력하기
-innerHTML

Node와 Element의 차이 
https://hianna.tistory.com/711

자바스크립트로 클릭시 타일 3*3 선택하기
const tile = tile
const tileLeft = tile.previousSibling;  
const tileRight = tile.nextSibling; 
const tileParentRight = tile.parentNode.nextSibling;  
const tileParentLeft = tile.parentNode.previousSibling;

if (tileParentRight !== null) {
   const tileDown = tileParentRight.querySelector('.' + tileClass);
   const tileDownLeft = tileDown.previousSibling;
   const tileDownRight = tileDown.nextSibling;
}

if (tileParentLeft !== null) {
   const tileUp = tileParentLeft.querySelector('.' + tileClass);
   const tileUpLeft = tileUp.previousSibling;
   const tileUpRight = tileUp.nextSibling;
 }




input 평균 길이
-<input placeholder="가로 줄" id="row" size="5"/>

지뢰찾기 표 만들기
-html에서 table>tbody
-script에서 const table = document.querySelector('#table');
const tbody = document.createElement('tbody'); table.appendChild(tbody);

입력 값에 따른 테이블 만들기 

오류
-함수 선언문과 함수 표현식의 차이를 이해하지 못해서 오류가 났다.
button.addEventListener("click", start);
const start = () => {
  console.log(rowa);
}
-함수 선언문은 스크립트의 맨 위로 호이스팅되어 실행 컨텍스트에 미리 등록되기 때문에 코드 어디에서든 접-근할 수 있다. function 형태
-함수 표현식을 만들 때는 위치에 신경써야 한다.

입력창에 값을 입력하지 않을 경우 탐지하기
-if (!rowValue || !cellValue || !mineValue)