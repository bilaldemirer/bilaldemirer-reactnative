import React from 'react';
import {TextInput, View, Text} from 'react-native';
import {styles} from './text-field.styles';

const TextFieldUI = ({
  name,
  text,
  focus,
  onChangeInputText,
  setFocus,
  size,
}) => {
  return (
    <View style={styles.container}>
      {focus && <Text style={styles.placeholder}>{name}</Text>}
      <View
        style={[
          styles.innerContainer,
          size === 's' ? {height: 40} : {height: 100},
        ]}>
        <TextInput
          style={styles.input}
          placeholder={name}
          onChangeText={onChangeInputText}  
          onBlur={() => (text.length > 0 ? setFocus(true) : setFocus(false))}
        />
      </View>
    </View>
  );
};

export default TextFieldUI;
