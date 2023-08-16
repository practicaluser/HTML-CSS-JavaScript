let n = parseInt(prompt("몇 명이 참가하나요?"));
while (n <= 1 || isNaN(n)) {
  n = parseInt(
    prompt("2 이상의 숫자를 다시 입력해주세요. 몇 명이 참가하나요?")
  );
}

const button = document.querySelector("button");
const text = document.querySelector("input");
const participant = document.querySelector(".participant");
const suggestedWord = document.querySelector("#word");
let num = 1;
let count = 0;

button.addEventListener("click", start);

text.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});

text.addEventListener("keydown", (event) => {
  const cursorPosition = text.selectionStart;
  if (cursorPosition === 1) {
    const keyCode = event.keyCode || event.which;
    if (keyCode === 8) {
      event.preventDefault(); // 백스페이스 키의 기본 동작인 글자 지우기를 막음
      alert("글자를 지우지 마세요!"); // 사용자에게 안내
    }
  }
});

function start() {
  let word = text.value;
  if (word.length !== 3) {
    alert("문자를 3글자로 입력해 주세요");
    return;
  } else if (!isKorean(word)) {
    alert("한글을 입력해 주세요");
    return;
  } else if (isConsonantOrVowel(word)) {
    alert("한글 단어나 문장을 입력해주세요!");
    return;
  }
  suggestedWord.innerHTML = word;
  text.value = word.charAt(2);
  if (n > num) {
    num++;
  } else {
    num = 1;
  }
  participant.textContent = `${num}번째 참가자`;
  count++;
}

function isKorean(text) {
  const koreanPattern =
    /^[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7A3]*$/;
  return koreanPattern.test(text);
}

function isConsonantOrVowel(text) {
  const consonants = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
    "ㄳ",
    "ㄵ",
    "ㄶ",
    "ㄺ",
    "ㄻ",
    "ㄼ",
    "ㄽ",
    "ㄾ",
    "ㄿ",
    "ㅀ",
    "ㅄ",
  ];

  const vowels = [
    "ㅏ",
    "ㅐ",
    "ㅑ",
    "ㅒ",
    "ㅓ",
    "ㅔ",
    "ㅕ",
    "ㅖ",
    "ㅗ",
    "ㅘ",
    "ㅙ",
    "ㅚ",
    "ㅛ",
    "ㅜ",
    "ㅝ",
    "ㅞ",
    "ㅟ",
    "ㅠ",
    "ㅡ",
    "ㅢ",
    "ㅣ",
  ];
  let hasWord = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (consonants.includes(char) || vowels.includes(char)) {
      hasWord++;
    }
  }

  if (hasWord > 0) {
    hasWord = true;
  } else {
    hasWord = false;
  }

  return hasWord;
}
