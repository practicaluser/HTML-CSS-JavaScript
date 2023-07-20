function checkMine(tile) {
  const tileClass = tile.className;
  const tileLeft = tile.previousSibling;
  const tileRight = tile.nextSibling;
  const tileParentRight = tile.parentNode.nextSibling;
  const tileParentLeft = tile.parentNode.previousSibling;
  countMineLocations(tileLeft);
  countMineLocations(tileRight);

  if (tileParentRight !== null) {
    const tileDown = tileParentRight.querySelector("." + tileClass);
    const tileDownLeft = tileDown.previousSibling;
    const tileDownRight = tileDown.nextSibling;
    countMineLocations(tileDown);
    countMineLocations(tileDownLeft);
    countMineLocations(tileDownRight);
  }

  if (tileParentLeft !== null) {
    const tileUp = tileParentLeft.querySelector("." + tileClass);
    const tileUpLeft = tileUp.previousSibling;
    const tileUpRight = tileUp.nextSibling;
    countMineLocations(tileUp);
    countMineLocations(tileUpLeft);
    countMineLocations(tileUpRight);
  }

  tile.innerHTML = mineCount;
  mineCount = 0;
}

function countMineLocations(clickedTile) {
  const mineLocationSelector = ".mineLocation";

  if (clickedTile === null) {
    return;
  }

  const adjacentMineLocation = clickedTile.querySelector(mineLocationSelector);

  if (adjacentMineLocation) {
    mineCount++;
  } else {
    return;
  }
  return mineCount;
}
