export const dayOfWeek = number => {
  switch (number) {
    case 0:
      return 'Пн'
    case 1:
      return 'Вт'
    case 2:
      return 'Ср'
    case 3:
      return 'Чт'
    case 4:
      return 'Пт'
    case 5:
      return 'Сб'
    case 6:
      return 'Вс'
    default:
      return 'Пн'
  }
}
