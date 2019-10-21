import React, {useState, useEffect} from 'react'
import {View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Image} from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown'
import {connect} from 'react-redux'
import {options} from 'constants/options'
import {addTask} from 'reducers/days'
import styles from './styles'

function AddExercise({chosenDay, days, dispatch}) {
  const [when, setWhen] = useState(0)
  const [count, setCount] = useState(0)
  const [double, setDouble] = useState(false)
  const [exercise, setExercise] = useState(options[0])

  useEffect(() => {
    setWhen(chosenDay)
  }, [])
  
  const ViewText = ({title, toggle}) => (
    <TouchableOpacity onPress={() => setDouble(!double)} disabled={!toggle} style={styles.toggleView}>
      {toggle && <View style={styles.checkBox}>{double && <View style={styles.checkMark}></View>}</View>}
      <Text>{`${title}`}</Text>
    </TouchableOpacity>
  )

  const renderRow = item => {
    return (
      <View style={styles.dropdownItem}>
        <View style={styles.imgView}>
          <Image source={item.img} style={styles.img} />
        </View>
        <Text>{item.name}</Text>
      </View>
    )
  }
  const renderButtonText = item => item.name

  const onSelect = (index, value) => setExercise(value)

  const saveTask = () => {
    dispatch(addTask({when, count, double, ...exercise}))
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ViewText title={'День'} />
      <TextInput value={`${when}`} onChangeText={setWhen} keyboardType={'number-pad'} />
      <ViewText title={'Упражнение'} />
      <ModalDropdown
        renderButtonText={renderButtonText}
        defaultValue={exercise.name}
        onSelect={onSelect}
        options={options}
        dropdownStyle={styles.dropdownStyle}
        renderRow={renderRow}
      />
      <ViewText title={'Колличество повторений'} />
      <TextInput value={`${count}`} onChangeText={setCount} keyboardType={'number-pad'} />
      <ViewText title={'Двойная нагрузка'} toggle />
      <TouchableOpacity style={styles.button} onPress={saveTask}>
        <Text>{'Сохранить'}</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const mapStateToProps = state => {
  return {
    chosenDay: state.chosenDay,
    days: state.days,
  }
}

export default connect(mapStateToProps)(AddExercise)
