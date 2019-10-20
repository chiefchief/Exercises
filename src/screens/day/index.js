import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

function Day({navigation, days, chosenDay}) {
  const [day, setDay] = useState({})

  useEffect(() => {
    setDay(days.filter(item => item.id === chosenDay))
  }, [])

  console.log(day, 'DAY')
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink'}}>
      <Text>{'Day'}</Text>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Text>{'Go Back'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AddExercise')}>
        <Text>{'Go to Add'}</Text>
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
