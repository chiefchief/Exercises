import React from 'react'
import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import {Provider} from 'react-redux'
import store from './src/store'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import route from 'services/route'
console.disableYellowBox = true

const Navigator = createStackNavigator(
  {
    Schedule: {screen: require('screens/schedule').default, navigationOptions: {title: 'График'}},
    Day: {screen: require('screens/day').default, navigationOptions: {title: 'Просмотр дня'}},
    AddExercise: {screen: require('screens/add-exercise').default, navigationOptions: {title: 'Добавление упражнения'}},
  },
  {
    initialRouteName: 'Schedule',
  },
)

const Exercises = createAppContainer(Navigator)

const App = () => (
  <Provider store={store}>
    {/* <StatusBar barStyle="dark-content" translucent={true} backgroundColor={'transparent'} /> */}
    <Exercises ref={navigatorRef => route.setRoot(navigatorRef)} />
    {/* <Exercises /> */}
  </Provider>
)
AppRegistry.registerComponent(appName, () => App)
