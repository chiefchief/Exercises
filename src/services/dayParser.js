export const dayParser = array => {
  let weeks = []
  let tempObj = {
    week: 0,
    days: [],
  }
  array.forEach((element, index) => {
    if ((index + 1) % 7) {
      if (index % 7 === 1) {
        tempObj.week = Math.floor(index / 7) + 1
      }
      tempObj.days.push(element)
    } else {
      tempObj.days.push(element)
      weeks.push(tempObj)
      tempObj = {week: 0, days: []}
    }
  })
  return weeks
}
