let check = document.querySelector(".check");
let number = document.querySelector(".number");
let text = document.querySelector(".text");

let regex = /^(\+82|0)\d{9,11}$/;

check.addEventListener("click", () => {
  if (number.value == "") {
    text.innerText = "Please Enter Your Phone Number";
    text.style.color = "#fff";
  } else if (number.value.match(regex)) {
    text.innerText = "Congrats! You Enter A Valid Phone Number";
    text.style.color = "rgba(4,125,9,1)";
  } else {
    text.innerText = "Oops! Your Phone Number Is Invalid";
    text.style.color = "#da3400";
  }
});
