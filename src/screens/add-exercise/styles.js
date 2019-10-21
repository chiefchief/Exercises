import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  dropdownStyle: {
    padding: 8,
    paddingBottom: 0,
    backgroundColor: 'pink',
    height: 120,
  },
  button: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 16,
  },
  imgView: {
    width: 32,
    height: 32,
    backgroundColor: 'white',
    borderRadius: 16,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  img: {
    width: 24,
    height: 24,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleView: {
    flexDirection: 'row',
    marginBottom: 4,
    marginTop: 16,
  },
  checkBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'black',
  },
  checkMark: {
    width: 8,
    height: 8,
    backgroundColor: 'black',
    borderRadius: 2,
  },
})
