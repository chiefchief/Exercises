import React, {useState, useEffect} from 'react'
import {View, Dimensions, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import Carousel, {Pagination} from 'react-native-snap-carousel'
import RenderWeek from 'components/render-week'
import {dayParser} from 'services/dayParser'

const {width} = Dimensions.get('window')

function Schedule({days, navigation}) {
  const [active, setActive] = useState(0)
  const [weeksArray, setWeeksArray] = useState([])

  useEffect(() => {
    setWeeksArray(dayParser(days))
  }, [])

  const renderItem = ({item}) => <RenderWeek item={item} navigation={navigation} />
  return (
    <View style={styles.mainView}>
      <Carousel
        data={weeksArray}
        renderItem={renderItem}
        sliderWidth={width - 32}
        itemWidth={width - 32}
        onSnapToItem={setActive}
      />
      <Pagination
        dotsLength={weeksArray.length}
        activeDotIndex={active}
        containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.75)', position: 'absolute', bottom: 24, paddingVertical: 10}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  )
}

const mapStateToProps = state => {
  return {
    days: state.days,
  }
}

export default connect(mapStateToProps)(Schedule)

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
})
