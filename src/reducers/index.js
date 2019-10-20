import {combineReducers} from 'redux'

export default combineReducers({
  chosenDay: require('./chosenDay').default,
  days: require('./days').default,
})
