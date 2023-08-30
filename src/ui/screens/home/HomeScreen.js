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

  const handleOpenExam = () => {
    navigation.navigate('Exam');
  };

  const handleOpenResults = () => {
    navigation.navigate('Results');
  };

  const handleOpenAbout = () => {
    navigation.navigate('About');
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
          <TouchableOpacity style={styles.button} onPress={handleOpenExam}>
            <Image
              source={require('./../../../../assets/exam.png')}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Exame</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleOpenResults}>
            <Image
              source={require('./../../../../assets/results.png')}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Resultado</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleOpenAbout}>
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
