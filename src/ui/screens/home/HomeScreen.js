import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { styles } from './HomeScreen.style';

const HomeScreen = () => {
  const [, setHasCameraPermission] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const getCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    };

    getCameraPermission();
  }, []);

  const handleOpenForm = () => {
    navigation.navigate('Form');
  };

  const handleOpenList = () => {
    navigation.navigate('List')
  }

  const handleOpenCamera = () => {
    navigation.navigate('Camera');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./../../../../assets/logo-noname.png')}
        style={styles.image}
      />
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleOpenForm}
        >
          <Text style={styles.buttonText}>Cadastrar paciente</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleOpenList}
        >
          <Text style={styles.buttonText}>Listar paciente</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleOpenCamera}
        >
          <Text style={styles.buttonText}>Abrir Câmera</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Visualizar resultados</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
