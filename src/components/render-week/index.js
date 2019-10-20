import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function RenderWeek({}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{height: 24, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray'}}>
        <Text style={{fontSize: 18, color: 'black'}}>{'1 Неделя'}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

// Высота - ​24​,
// цвет​- светлосерый, поля гориз - ​12​.
// Текст в заголовке: ​"X неделя"​, цвет​чёрный,
// размер шрифта ​18​,
// вертикально ​по​центру,
// оступ горизонтальный ​12​.
