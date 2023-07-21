function rightClick(e) {
  let a = [];
  e.preventDefault();
  const element = e.target;
  if (rightCheck) {
    element.innerHTML += '<img src="깃발.png" class="flag">';
    prevRightClickedElement = element;
    rightCheck = false;
  } else {
    prevRightClickedElement.innerHTML = "";
    rightCheck = true;
  }
}
