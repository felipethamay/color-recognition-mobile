import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderWidth: 0.5,
    borderColor: '#ffff',
    height: 55,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 40,
    width: 40,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#9d9b99',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#9d9b99',
    width: 1,
    height: 40,
  }
});