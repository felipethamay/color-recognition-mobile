import React, { useEffect } from 'react';
import { ActivityIndicator, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './LoadingScreen.style';

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('./../../../../assets/logo.png')}
        style={styles.image}
      />
      <ActivityIndicator
        size="large"
        color="#a75a00"
      />
    </View>
  );
};

export default LoadingScreen;
