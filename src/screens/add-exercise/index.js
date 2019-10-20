import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export default function AddExercise({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray'}}>
      <Text>{'AddExercise'}</Text>
      <TouchableOpacity onPress={()=>navigation.pop()}>
        <Text>{'Go Back'}</Text>
      </TouchableOpacity>
    </View>
  )
}
