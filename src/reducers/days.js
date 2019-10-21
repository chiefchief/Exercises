import route from 'services/route'
import {Alert} from 'react-native'

const ADD_NEW_TASK = '[days] ADD_NEW_TASK'

const initialState = [
  {tasks: [], id: 1},
  {tasks: [], id: 2},
  {tasks: [], id: 3},
  {tasks: [], id: 4},
  {tasks: [], id: 5},
  {tasks: [], id: 6},
  {tasks: [], id: 7},
  {tasks: [], id: 8},
  {tasks: [], id: 9},
  {tasks: [], id: 10},
  {tasks: [], id: 11},
  {tasks: [], id: 12},
  {tasks: [], id: 13},
  {tasks: [], id: 14},
  {tasks: [], id: 15},
  {tasks: [], id: 16},
  {tasks: [], id: 17},
  {tasks: [], id: 18},
  {tasks: [], id: 19},
  {tasks: [], id: 20},
  {tasks: [], id: 21},
]

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return Object.assign([], [...action.data])
    default:
      return state
  }
}

export const addTask = ({count, double, img, shortName, when}) => async (dispatch, getState) => {
  const {days} = getState()
  let index = null
  days.forEach((e, i) => {
    if (e.id == when) index = i
  })
  if (index !== null) {
    if (count) {
      let newItem = {...days[index]}
      newItem.tasks.push({count, double, img, shortName})
      dispatch(addNewTask([...days.slice(0, index), {...newItem}, ...days.slice(index + 1)]))
      route.pop()
    } else {
      Alert.alert('Неверное количество', '', [{text: 'OK', onPress: () => {}}])
    }
  } else {
    Alert.alert('Неверно указан день', '', [{text: 'OK', onPress: () => {}}])
  }
}

const addNewTask = data => ({type: ADD_NEW_TASK, data})
