import React, {useState, useEffect} from 'react'
import {View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Image} from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown'
import {connect} from 'react-redux'
import {options} from 'constants/options'

function AddExercise({navigation, chosenDay}) {
  const [when, setWhen] = useState(0)
  const [count, setCount] = useState(0)
  const [double, setDouble] = useState(false)
  const [exercise, setExercise] = useState(options[0])

  useEffect(() => {
    setWhen(chosenDay)
  }, [])

  const ViewText = ({title, toggle}) => (
    <TouchableOpacity
      onPress={() => setDouble(!double)}
      disabled={!toggle}
      style={{flexDirection: 'row', marginBottom: 4, marginTop: 16}}>
      {toggle && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 8,
            width: 16,
            height: 16,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: 'black',
          }}>
          {double && <View style={{width: 8, height: 8, backgroundColor: 'black', borderRadius: 2}}></View>}
        </View>
      )}
      <Text>{`${title}`}</Text>
    </TouchableOpacity>
  )

  const renderRow = item => {
    return (
      <View>
        <Image source={item.img} style={{width: 20, height: 20}} />
        <Text>{'item'}</Text>
      </View>
    )
  }
  const renderButtonText = item => item.name

  const onSelect = (index, value) => setExercise(value)

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 24,
      }}
      behavior="padding"
      enabled>
      <ViewText title={'День'} />
      <TextInput value={`${when}`} onChangeText={setWhen} keyboardType={'number-pad'} />
      <ViewText title={'Упражнение'} />
      <ModalDropdown
        style={{width: '100%'}}
        renderButtonText={renderButtonText}
        defaultValue={exercise.name}
        onSelect={onSelect}
        options={options}
        renderRow={renderRow}
      />
      <ViewText title={'Колличество повторений'} />
      <TextInput value={`${count}`} onChangeText={setCount} keyboardType={'number-pad'} />
      <ViewText title={'Двойная нагрузка'} toggle />
      <TouchableOpacity
        style={{
          width: '100%',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 20,
          marginTop: 16,
          marginBottom: 24,
          alignSelf: 'flex-end',
        }}
        onPress={() => console.log('save')}>
        <Text>{'Сохранить'}</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const mapStateToProps = state => {
  return {
    chosenDay: state.chosenDay,
  }
}

export default connect(mapStateToProps)(AddExercise)
