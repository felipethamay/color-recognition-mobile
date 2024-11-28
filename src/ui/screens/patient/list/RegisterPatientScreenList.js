import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { styles } from './RegisterPatientScreenList.style';

const RegisterPatientListScreen = ({ onSelect }) => {
  const [cadastros, setCadastros] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState('');

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
        <RNPickerSelect
          style={styles.picker}
          onValueChange={(itemValue) => handlePatientSelect(itemValue)}
          value={selectedPatient}
          items={[
            ...cadastros.map((item) => ({
              label: item.nome,
              value: item.id
            }))
          ]}
        />
      ) : (
        <Text>No patients available.</Text>
      )}
    </View>
  );
};

export default RegisterPatientListScreen;
