import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  cameraContainer: {
    flex: 1,
    width: '100%',
    maxHeight: 500,
    maxWidth: 500,
  },
  camera: {
    flex: 1,
  },
  delimiter: {
    position: 'absolute',
    borderColor: '#ffff',
    borderRadius: 10,
    borderWidth: 10,
    width: '70%',
    height: '40%',
    alignSelf: 'center',
    marginTop: 100,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  buttonImage: {
    width: 70,
    height: 70,
  },
});
