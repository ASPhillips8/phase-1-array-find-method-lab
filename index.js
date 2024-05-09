function superbowlWin(record) {
  const gameResult = record.find(callback);
  if (gameResult) {
    return gameResult.year;
  } else {
    return undefined;
  }
}

function callback(record) {
  return record.result === "W";
}
