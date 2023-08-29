import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, Text, SafeAreaView } from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <Image
        source={require('./../../../../assets/logo.png')}
        style={styles.image}
      />
      <View style={styles.gridContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleOpenForm}>
            <Image
              source={require('./../../../../assets/register.png')}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleOpenCamera}>
            <Image
              source={require('./../../../../assets/exam.png')}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Exame</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('./../../../../assets/results.png')}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Resultado</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('./../../../../assets/info.png')}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
          <Text style={styles.buttonText}>+ Mais</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
