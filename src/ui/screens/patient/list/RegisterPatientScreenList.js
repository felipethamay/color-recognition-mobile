import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './RegisterPatientScreenList.style';

const RegisterPatientListScreen = ({ onSelect }) => {
  const [cadastros, setCadastros] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const fetchCadastros = async () => {
      try {
        const savedData = await AsyncStorage.getItem('cadastros');
        const parsedData = savedData ? JSON.parse(savedData) : [];
        console.log('savedData: ', savedData);
        setCadastros(parsedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCadastros();
  }, []);

  const handlePatientSelect = (patientId) => {
    setSelectedPatient(patientId);
    onSelect(patientId);
  };

  return (
    <View>
      {cadastros.length > 0 ? (
        <Picker
          style={styles.picker}
          selectedValue={selectedPatient}
          onValueChange={(itemValue) => handlePatientSelect(itemValue)}
        >
          <Picker.Item label="Selecione" value={null} />
          {cadastros.map((item) => (
            <Picker.Item key={item.id} label={item.nome} value={item.id} />
          ))}
        </Picker>
      ) : (
        <Text>No patients available.</Text>
      )}
    </View>
  );
};

export default RegisterPatientListScreen;
