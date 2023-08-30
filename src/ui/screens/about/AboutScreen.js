import React from 'react';
import { SafeAreaView, View, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { ThemeContext } from './../../../contexts/ThemeContext';
import { styles } from './AboutScreen.styles';

const AboutScreen = () => {
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={theme.container}>
      <View style={theme.space} />
      <Text style={theme.heading}>PROJETO DESENVOLVIDO POR</Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}>
          <Image
            source={require('./../../../../assets/student.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            Alanne Vandréia da Silva Alves
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}>
          <Image
            source={require('./../../../../assets/ufcg.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            Universidade Federal de Campina Grande
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}>
          <Image
            source={require('./../../../../assets/uaema.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            Unidade Acadêmica de Engenharia de Materiais
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}>
          <Image
            source={require('./../../../../assets/certbio.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            Laboratório de Avaliação e Desenvolvimento de Biomateriais do Nordeste
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}>
          <Image
            source={require('./../../../../assets/capes.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            CAPES
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;
