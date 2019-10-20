import {combineReducers} from 'redux'

export default combineReducers({
  weeks: require('./weeks').default,
})
