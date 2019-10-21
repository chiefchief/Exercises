import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import route from 'services/route'
import styles from './styles'
import TaskComponent from '../../components/task-component'

function Day({days, chosenDay}) {
  const [day, setDay] = useState({id: 0, tasks: []})
  useEffect(() => {
    setDay(days.filter(item => item.id === chosenDay)[0])
  }, [days])

  const renderItem = (item, index) => <TaskComponent item={item} key={`${index}`} />

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'Упражнения'}</Text>
      <ScrollView
        style={styles.flat}
        contentContainerStyle={{justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap'}}>
        {day.tasks.map(renderItem)}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => route.push('AddExercise')}>
        <Text>{'Добавить'}</Text>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    days: state.days,
    chosenDay: state.chosenDay,
  }
}

export default connect(mapStateToProps)(Day)
