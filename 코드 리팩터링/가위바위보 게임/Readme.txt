개선점
코드간략화

구현 방법
1 이미지를 특정시간 후에 순환하고 해당 이미지의 속성을 부여하는 코드를 만들었다.
2 버튼을 구현하고 버튼을 클릭하면 내가 선택한 버튼 속성과 순환하는 이미지의 속성을 비교하는 코드를 만들었다
3 가위바위보 점수를 설정하고 승패를 판별하는 코드를 만들었다.
4 3번 경기를 진행해서 먼저 3번 이기는 쪽이 승리하고, 승리 후에는 새롭게 게임이 진행된다.

배운 점
div에 이미지를 넣을 때는 div에 공간을 미리 만들어 놓아야 한다.

n의 값을 순환하고 싶을 때
n = (n + 1) % 3;

간단한 가위바위보 로직

html에서 버튼의 class가져오기
-classList 메서드는 DOMTokenList 객체를 가져옴
--const className = clickedButton.classList;
--DOMTokenList ['scissors', value: 'scissors']
-가져온 DOMTokenList 객체를 배열로 변환할 때 Array.from 활용
--const myChoice = Array.from(className)
---['scissors']


X좌표와 Y좌표 구하기
const image = document.querySelector('.image');
        //전체 이미지 좌표 관련 요약
        const rect = image.getBoundingClientRect();
        console.log(rect);

        image.addEventListener('click', (event) => {
        const mouseX = event.offsetX;
        const mouseY = event.offsetY;

        // 좌표 출력 또는 추가 로직 수행
        console.log('X 좌표:', mouseX);
        console.log('Y 좌표:', mouseY);
});

참고
https://inpa.tistory.com/entry/JS-🌐-HTML-요소의-위치X-Y-값-얻기








