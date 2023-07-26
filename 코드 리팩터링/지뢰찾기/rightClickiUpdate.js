function rightClick(e) {
  e.preventDefault();
  const element = e.target;
  const tdElement = element.closest("td");
  const existingFlags = tdElement.querySelectorAll("img.flag");

  if (flagCount > 0 && existingFlags.length === 0) {
    const flagImg = '<img src="깃발.png" class="flag">';
    const mineLocationElement = tdElement.querySelector(".mineLocation");
    if (mineLocationElement) {
      mineLocationElement.insertAdjacentHTML("beforeend", flagImg);
    } else {
      tdElement.innerHTML += flagImg;
    }
    a.push(tdElement);
    flagCount--;
  } else if (a.includes(tdElement) && existingFlags.length === 1) {
    existingFlags.forEach((flag) => flag.remove());
    flagCount++;
  } else {
    return;
  }
}
