개선점
코드의 가독성 개선
입력받은 참가자 수를 검증
버튼을 직접 마우스로 클릭하지 않고도 엔터를 클릭하면 입력이 되게 함
규칙을 제정해서 한글로 3글자를 입력해야지만 제시어로 인정이되게 만듦
끝말잇기이므로 어차피 뒷글자부터 시작이 고정되어 있으므로 제시어를 입력하면 그 다음 참가자가 제시어의 끝말 다음부터 입력하면 되도록 만듦
자음 또는 모음만 나오면 탐지
백스페이스 기능을 selectionStart메서드를 활용해서 첫번째 단어만 금지시키고 나머지 단어는 백스페이스 자유롭게 활용가능



기본 기능
inline : span
block : div
inline-block : button, input

html에 적힌 문자를 바꿀 때
-div에 class를 작성하고 기본 문자를 통째로 바꾸거나
-div 중간에 span을 끼워넣어서 특정 문자만 교환

자바스크립트
-참가자 숫자 정하기
-제시어 입력 후 버튼 누르기
--엔터키도 적용
-버튼 입력 후 
--입력한 단어가 적절한지 검증한다.
---글자가 3글자인가? + 한글로 입력했는가? + 단어 중에 자음 또는 모음만 있는 것이 있는가? 
--몇 번째 참가자인지 화면에 보여줌
---innerText나 textContent를 활용
---참가자수만큼 무한순환해야 함
--제시어를 화면에 보여줌
---innerText나 textContent를 활용
--입력창이 뒷글자를 제외하고 비워짐
---input창에 적은 단어는 자바스크립트에서 value 메서드로 가져올 수 있다.
---value메서드를 활용해 입력창을 비우거나 특정한 문자를 추가 가능
-- 뒷글자 다음부터 단어를 입력

innerHTML과 innerText과 textContent 차이
https://velog.io/@kim_unknown_/JavaScript-Difftext
innerHTML은 요소 내에 있는 HTML과 XML 모두를 의미하고,
innerText는 요소 내에서 사용자에게 보여지는 text를 의미하고,
textContent는 script나 style 태그와 상관없이 해당 노드가 가지고 있는 text를 의미한다.

제대로 입력이 안되면 input창과 제시어를 공란으로 만듦(input창만 공란으로 만들면 끝말이 아닌 새로운 단어를 집어넣어도 넘어감)
text.value = "";
suggestedWord.innerHTML = "";