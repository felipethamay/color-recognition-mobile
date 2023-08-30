import React, { useEffect, useState, useRef } from 'react';
import { View, Alert, Text, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './CameraScreen.style';

const CameraScreen = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    const getCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    };

    getCameraPermission();
  }, []);

  const takePhoto = async () => {
    if (!hasCameraPermission) {
      Alert.alert('Permissão necessária', 'A câmera não está disponível.');
      return;
    }

    if (!cameraRef.current) {
      Alert.alert('Câmera não encontrada', 'Não há câmera disponível no dispositivo.');
      return;
    }

    const photo = await cameraRef.current.takePictureAsync();

    if (photo) {
      savePhotoToGallery(photo.uri);
      evaluatePhoto(photo.uri);
    }
  };

  const savePhotoToGallery = async (photoUri) => {
    try {
      const asset = await MediaLibrary.createAssetAsync(photoUri);
      await MediaLibrary.createAlbumAsync('Color Recognition', asset, false);
      Alert.alert('Foto salva', 'A foto foi salva na galeria do dispositivo.');
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao salvar a foto', 'Ocorreu um erro ao salvar a foto na galeria.');
    }
  };

  const evaluatePhoto = async () => {
    // TODO: Implemente o código para avaliar a cor da imagem usando o modelo de rede neural treinado
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.cameraContainer}>
          {hasCameraPermission ? (
            <Camera
              style={styles.camera}
              ref={(ref) => {
                cameraRef.current = ref;
              }} />
          ) : (
            <Text>Permissão da câmera não concedida</Text>
          )}
        </View>
        <View style={styles.delimiter} />
      </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <Image
              source={require('./../../../../assets/diaphragm.png')}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
        </View>
    </>
  );
};

export default CameraScreen;
