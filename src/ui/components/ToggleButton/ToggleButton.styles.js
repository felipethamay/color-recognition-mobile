import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 5,
    height: 5,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 5,
    borderColor: '#f1d3b6',
  },
  activeButton: {
    backgroundColor: '#f07500',
  },
  inactiveButton: {
    backgroundColor: '#f1d3b6',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
