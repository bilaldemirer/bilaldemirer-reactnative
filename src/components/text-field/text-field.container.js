import React, {useState} from 'react';
import {useEffect} from 'react/cjs/react.development';
import TextFieldUI from './text-field.ui';

const TextFieldContainer = ({name, onChangeText, size}) => {
  const [text, setText] = useState('');
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (text.length > 0) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  }, [text]);

  const onChangeInputText = input => {
    onChangeText(input);
    setText(input);
  };

  return (
    <TextFieldUI
      name={name}
      text={text}
      focus={focus}
      size={size}
      onChangeInputText={onChangeInputText}
      setFocus={setFocus}
    />
  );
};

export default TextFieldContainer;
