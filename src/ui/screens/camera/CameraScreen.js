import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './CameraScreen.style';

const CameraScreen = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const cameraRef = useRef(null);

  useEffect(() => {
    const initializeTf = async () => {
      setIsLoading(true);
      console.log("Iniciando carregamento do modelo...");

      await tf.ready();
      console.log('TensorFlow.js inicializado');

      const modelJson = require('../../../../assets/models/color_classifier_model.json');
      try {
        const loadedModel = await tf.loadLayersModel(bundleResourceIO(modelJson));
        setModel(loadedModel);
        setIsLoading(false);
        console.log('Modelo carregado');
      } catch (error) {
        console.error("Erro ao carregar o modelo:", error);
        setIsLoading(false);
      }
    };

    const requestCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    };

    requestCameraPermission();
    initializeTf();
  }, []);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({ base64: true });
      if (model) {
        evaluatePhoto(photo.uri);
      } else {
        Alert.alert('Atenção', 'Modelo ainda não carregado. Tente novamente em instantes.');
        console.log("Modelo não carregado ainda.");
      }
    }
  };

  const pickImageFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Desculpe, precisamos de permissões para acessar a galeria');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && model) {
      evaluatePhoto(result.uri);
    } else {
      Alert.alert('Atenção', 'Modelo ainda não carregado. Tente novamente em instantes.');
      console.log("Modelo não carregado ainda.");
    }
  };

  const evaluatePhoto = async (photoUri) => {
    if (!model) {
      console.log('Modelo ainda não está carregado');
      return;
    }

    try {
      // Carregar a imagem da URI diretamente
      const imageTensor = await tf.browser.fromPixelsAsync({ uri: photoUri });

      // Redimensionar a imagem para 224x224 (tamanho esperado pelo modelo)
      const resizedImage = tf.image.resizeBilinear(imageTensor, [224, 224]);

      // Normalizar a imagem para [0, 1]
      const normalizedImage = resizedImage.div(tf.scalar(255));

      // Adicionar a dimensão de batch (formato [1, 224, 224, 3])
      const batchedImage = normalizedImage.expandDims(0);

      // Fazer a predição
      const prediction = model.predict(batchedImage);

      // Obter a classe predita (supondo que o modelo tenha uma saída de uma classe categórica)
      const predictedColor = prediction.argMax(-1).dataSync()[0];

      Alert.alert(`Cor identificada: ${predictedColor}`);
      tf.dispose([imageTensor, resizedImage, normalizedImage, batchedImage, prediction]);

    } catch (error) {
      console.error('Erro ao processar a imagem:', error);
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
            <Text>Carregando o modelo...</Text>
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
