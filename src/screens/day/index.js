import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export default function Day({navigation}) {
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
