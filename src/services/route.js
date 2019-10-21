import {StackActions} from 'react-navigation'

let navigation

function setRoot(navigatorRef) {
  navigation = navigatorRef
}

function push(url) {
  navigation.dispatch(
    StackActions.push({
      routeName: url,
    }),
  )
}

function pop(n = 1) {
  navigation.dispatch(
    StackActions.pop({
      n: n,
    }),
  )
}

export default {
  push,
  pop,
  setRoot,
}
