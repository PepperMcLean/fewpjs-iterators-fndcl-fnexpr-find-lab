superbowlWin = (list) => {
  let result = list.find( list => list.result === "W" )
  return !!result ? result.year : undefined
}