import React from 'react';
import ButtonUI from './button.ui';

const ButtonContainer = ({title, onPress}) => {
  return <ButtonUI title={title} onPress={onPress} />;
};

export default ButtonContainer;
