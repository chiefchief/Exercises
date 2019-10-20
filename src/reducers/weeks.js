const GETWEEKS = '[weeks] GETWEEKS'

const initialState = {
  weeks: [1, 2, 3],
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const saveGameResult = () => ({type: GETWEEKS})
