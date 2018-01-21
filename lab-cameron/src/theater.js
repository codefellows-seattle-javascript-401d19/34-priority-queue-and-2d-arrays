const getInches = str => {
  const brokenUp = str.split(' ');
  if (brokenUp.includes('feet')) {
    const feetToInches = brokenUp[0] * 12;
    const total = brokenUp[3] + feetToInches;
    return total;
  } else {
    return brokenUp[0];
  }
};

const blockedNumber = (seats, x, y) => {
  const blockerCoord = seats[x][y];
  const blockerInches = getInches(blockerCoord);
  let blocked = 0;

  for (let i = x + 1; i < seats.length; i++) {
    const viewerCoord = seats[i][y];
    const viewerInches = getInches(viewerCoord);
    if (blockerInches > viewerInches) {
      blocked++;
    }
  }

  return blocked;
};
