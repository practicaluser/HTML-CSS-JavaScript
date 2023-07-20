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