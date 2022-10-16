import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './button.styles';

const ButtonUI = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonUI;
