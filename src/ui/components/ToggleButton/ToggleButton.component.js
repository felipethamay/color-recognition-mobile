import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './ToggleButton.styles';


const ToggleButton = ({ value, onValueChange, label }) => {
  return (
    <TouchableOpacity
      style={[styles.button, value ? styles.activeButton : styles.inactiveButton]}
      onPress={() => onValueChange(!value)}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ToggleButton;
