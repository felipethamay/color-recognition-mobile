import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { classifyColor } from '../../../services/colorClassificationService';
import { styles } from './CameraScreen.style';

const CameraScreen = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    const requestCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    };
    requestCameraPermission();
  }, []);

  const takePhoto = async () => {
    if (cameraRef.current) {
      Alert.alert('Aguarde, estamos processando sua imagem!');

      const photo = await cameraRef.current.takePictureAsync({
        allowsEditing: true,
        quality: 1,
        base64: true,
      });
      await evaluatePhoto(photo.base64);
      setIsLoading(true);
    }
  };

  const pickImageFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Desculpe, precisamos de permissões para acessar a galeria');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      const { base64 } = result.assets[0];
      await evaluatePhoto(base64);
    }
  };

  const evaluatePhoto = async (base64Image) => {
    setIsLoading(true);
    try {
      const result = await classifyColor(base64Image);

      const classes = {
        0: '006 mgdL',
        1: '010 mgdL',
        2: '030 mgdL',
        3: '042 mgdL',
        4: '060 mgdL',
        5: '120 mgdL',
      };

      const predictedClass = parseInt(result.predicted_class, 10);

      const classification = !isNaN(predictedClass) && classes.hasOwnProperty(predictedClass)
        ? classes[predictedClass]
        : 'Classe desconhecida';

      Alert.alert(`Classificação: ${classification}`);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível identificar a cor.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        {hasCameraPermission === null ? (
          <Text>Verificando permissão da câmera...</Text>
        ) : hasCameraPermission === false ? (
          <Text>Permissão da câmera não concedida</Text>
        ) : isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#a75a00" />
            <Text>Processando...</Text>
          </View>
        ) : (
          <Camera style={styles.camera} ref={cameraRef} />
        )}
      </View>
      <View style={styles.delimiter} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={takePhoto}>
          <Image
            source={require('./../../../../assets/diaphragm.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={pickImageFromGallery}>
          <View style={styles.iconTextContainer}>
            <Image
              source={require('./../../../../assets/gallery.png')}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Carregar da Galeria</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraScreen;
