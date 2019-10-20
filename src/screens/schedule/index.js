import React, {useState} from 'react'
import {View, Dimensions, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import Carousel, {Pagination} from 'react-native-snap-carousel'
import RenderWeek from 'components/render-week'

const {width} = Dimensions.get('window')

function Schedule({weeks}) {
  const [active, setActive] = useState(0)

  const renderItem = ({item}) => <RenderWeek />

  return (
    <View style={styles.mainView}>
      <Carousel
        data={weeks.weeks}
        renderItem={renderItem}
        sliderWidth={width - 32}
        itemWidth={width - 32}
        onSnapToItem={setActive}
      />
      <Pagination
        dotsLength={weeks.weeks.length}
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
    weeks: state.weeks,
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
