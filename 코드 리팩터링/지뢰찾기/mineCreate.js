function mineCreate() {
  const minePositions = new Set();

  while (minePositions.size < mineValue) {
    let randomTr = Math.floor(Math.random() * rowValue);
    let randomTd = Math.floor(Math.random() * cellValue);
    const position = `${randomTr},${randomTd}`;
    minePositions.add(position);
  }

  minePositions.forEach((position) => {
    const [randomTr, randomTd] = position.split(",");
    const selectedTr = document.querySelector(`.tr${randomTr}`);
    const selectedTd = selectedTr.querySelector(`.td${randomTd}`);
    const image = document.createElement("img");
    image.src = "지뢰.png";
    image.classList.add("mineIcon");
    selectedTd.appendChild(image);
  });
}
