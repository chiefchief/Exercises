import React from 'react'
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'

const {width} = Dimensions.get('window')

export default function TaskComponent({item}) {
  return (
    <View style={styles.item}>
      <View style={styles.imageView}>
        <Image source={item.img} style={styles.image} />
        {item.double && <Image source={require('assets/img/star.png')} style={styles.absoluteImage} />}
      </View>
      <Text>{`Количество:${item.count}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    width: (width - 80) / 2,
    padding: 8,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 56,
    height: 56,
  },
  absoluteImage: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
})
