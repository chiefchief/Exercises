import React from 'react'
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import {dayOfWeek} from 'services/dayOfWeek'
import {setChosenDay} from 'reducers/chosenDay'
import {connect} from 'react-redux'
import route from 'services/route'

const {width} = Dimensions.get('window')

function RenderWeek({item, dispatch}) {
  const getTaskCount = array => (array.length ? `${array.length} Упражнений` : 'Отсутствуют')

  const goToDay = id => {
    dispatch(setChosenDay(id))
    route.push('Day')
  }
  const renderItem = (item, index) => (
    <TouchableOpacity key={index} style={[styles.button, index > 4 && styles.weekEnd]} onPress={() => goToDay(item.id)}>
      <Text style={styles.dayOfWeek}>{dayOfWeek(index)}</Text>
      <View style={styles.tasks}>
        <Text>{`День ${item.id}`}</Text>
        <Text>{getTaskCount(item.tasks)}</Text>
      </View>
      <Text style={styles.text}>{'Просмотр'}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.weekContainer}>
      <View style={styles.headerView}>
        <Text style={{fontSize: 18, color: 'black'}}>{`${item.week} Неделя`}</Text>
      </View>
      {item.days.map(renderItem)}
    </View>
  )
}

export default connect()(RenderWeek)

const styles = StyleSheet.create({
  weekContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  headerView: {
    height: 24,
    width: width - 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'black',
  },
  button: {
    width: width - 32,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderTopWidth: 0,
    paddingVertical: 4,
    backgroundColor: 'blue',
  },
  weekEnd: {
    backgroundColor: 'red',
  },
  dayOfWeek: {
    width: (width - 32) / 6,
    textAlign: 'center',
  },
  tasks: {
    width: (width - 32) / 2,
  },
  text: {
    width: (width - 32) / 3,
    textAlign: 'center',
  },
})
