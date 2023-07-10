배운 점
div에 이미지를 넣을 때는 div에 공간을 미리 만들어 놓아야 한다.

이미지 변수로 주소 불어넣기
const rps = ['scissors','rock', 'paper'];

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


--https://inpa.tistory.com/entry/JS-🌐-HTML-요소의-위치X-Y-값-얻기








