import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterPatientListScreen = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchCadastros = async () => {
      try {
        const savedData = await AsyncStorage.getItem('cadastros');
        const parsedData = savedData ? JSON.parse(savedData) : [];
        console.log('savedData: ', savedData)
        setCadastros(parsedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCadastros();
  }, []);

  const renderItem = ({ item }) => (
    <View>
      {/* Render details of each item */}
      <Text>{item.nome}</Text>
      {/* Render other fields */}
    </View>
  );

  const keyExtractor = (item) => item.id ? item.id.toString() : '';

  return (
    <View>
      <FlatList
        data={cadastros}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default RegisterPatientListScreen;
