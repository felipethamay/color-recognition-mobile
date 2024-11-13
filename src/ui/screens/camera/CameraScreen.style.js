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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    marginTop: 10,
  },
  iconTextContainer: {
    alignItems: 'center',
  },
  buttonImage: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    textAlign: 'center',
  },
});
