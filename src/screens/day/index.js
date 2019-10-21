import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity, FlatList} from 'react-native'
import {connect} from 'react-redux'

function Day({navigation, days, chosenDay}) {
  const [day, setDay] = useState({})

  useEffect(() => {
    setDay(days.filter(item => item.id === chosenDay))
  }, [])

  const renderItem = ({item}) => <View></View>
  const keyExtractor = (item, index) => `${index}`

  console.log(day, 'DAY')
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightblue',
        paddingHorizontal: 16,
        paddingVertical: 24,
      }}>
      <Text style={{textAlign: 'center', marginBottom: 8}}>{'Упражнения'}</Text>
      <FlatList
        style={{flex: 1, backgroundColor: 'white', borderRadius: 16}}
        data={day.tasks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <TouchableOpacity
        style={{
          width: '100%',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 20,
          marginTop: 16,
        }}
        onPress={() => navigation.navigate('AddExercise')}>
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
