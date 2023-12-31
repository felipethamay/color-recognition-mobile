import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { ThemeContext } from './../../../contexts/ThemeContext';
import { styles } from './ResultsScreen.styles';

const ResultsScreen = () => {
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={theme.container}>
      
    </SafeAreaView>
  );
};

export default ResultsScreen;
