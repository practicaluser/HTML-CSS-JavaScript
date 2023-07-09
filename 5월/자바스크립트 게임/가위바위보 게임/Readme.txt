배운 점
X좌표와 Y좌표 구하기
-getBoundingClientRect()
--https://inpa.tistory.com/entry/JS-🌐-HTML-요소의-위치X-Y-값-얻기
가로 : 308 세로 : 308
X좌표1 : 0~80, y:308
X좌표2 : 105~185 , y:308
X좌표3 : 210~308, y:308

function cropImg(){
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  var image = new Image();
  image.src = "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=725&q=80"; 
  
  image.onload = function(){
    ctx.drawImage(image, 150, 200, 500, 300, 60,60, 500, 300);
  }
}

cropImg();



--x : 브라우저 창기준 x 좌표
--y : 브라우저 창기준 y 좌표
--width : 엘리먼트 가로 길이
--height : 엘리먼트 세로 길이
--top : 브라우저 창기준 세로 시작점 부터 엘리먼트 윗변 까지의 거리 (y 값과 같음)
--left : 브라우저 창기준 가로 시작점 부터 엘리먼트 좌측변 까지의 거리 (x 값과 같음)
--right : 브라우저 창기준 가로 시작점 부터 엘리먼트 우측변 까지의 거리 (x + width 값과 같음)
--bottom : 브라우저 창기준 세로 시작점 부터 엘리먼트 아래변 까지의 거리 (y + height 값과 같음)




