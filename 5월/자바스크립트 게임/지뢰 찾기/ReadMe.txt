input 평균 길이
-<input placeholder="가로 줄" id="row" size="5"/>

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