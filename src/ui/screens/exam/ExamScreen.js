import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { ThemeContext } from './../../../contexts/ThemeContext';
import RegisterPatientListScreen from './../patient/list/RegisterPatientScreenList';
import { styles } from './ExamScreen.style';

const ExamScreen = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();

  const handleButtonPress = () => {
    if (selectedPatient) {
      navigation.navigate('Camera');
    } else {
      alert('Please select a patient before proceeding.');
    }
  };

  const handlePatientSelect = (patientId) => {
    setSelectedPatient(patientId);
  };

  return (
    <SafeAreaView style={theme.container}>
      <View>
        <Text style={theme.heading}>1. SELECIONE UM PACIENTE</Text>
        <RegisterPatientListScreen onSelect={handlePatientSelect} />
        <View style={theme.space} />
        <View style={theme.space} />
        <Text style={theme.heading}>2. QUAL A COR DA SUA URINA?</Text>
        <View style={styles.gridContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
              <Image
                source={require('./../../../../assets/1.png')}
                style={styles.buttonImage}
              />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Super {'\n'}hidratado</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
              <Image
                source={require('./../../../../assets/2.png')}
                style={styles.buttonImage}
              />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Bom</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
              <Image
                source={require('./../../../../assets/3.png')}
                style={styles.buttonImage}
              />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Normal</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
              <Image
                source={require('./../../../../assets/4.png')}
                style={styles.buttonImage}
              />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Levemente {'\n'}Desidratado</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
              <Image
                source={require('./../../../../assets/5.png')}
                style={styles.buttonImage}
              />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Desidratado</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
              <Image
                source={require('./../../../../assets/6.png')}
                style={styles.buttonImage}
              />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Muito {'\n'}desidratado</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
              <Image
                source={require('./../../../../assets/7.png')}
                style={styles.buttonImage}
              />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Gravemente {'\n'}desidratado</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExamScreen;
