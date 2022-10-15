import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './select.styles';

const SelectUI = ({title, color, backgroundColor, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: backgroundColor}]}
      onPress={() => onPress(title)}>
      <Text style={[styles.text, {color: color}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SelectUI;
