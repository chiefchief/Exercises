const SET_CHOSEN_DAY = '[chosenDay] SET_CHOSEN_DAY'
const initialState = 0

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHOSEN_DAY:
      return action.day
    default:
      return state
  }
}

export const setChosenDay = day => ({type: SET_CHOSEN_DAY, day})
