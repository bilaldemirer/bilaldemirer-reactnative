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
      <View style={styles.innerContainer}>
        <TextInput
          style={[styles.input, size === 's' ? {height: 40} : {height: 100}]}
          placeholder={focus ? '' : name}
          onChangeText={onChangeInputText}
          numberOfLines={7}
          multiline={size === 's' ? false : true}
          onBlur={() => (text.length > 0 ? setFocus(true) : setFocus(false))}
          onFocus={() => setFocus(true)}
        />
      </View>
    </View>
  );
};

export default TextFieldUI;
