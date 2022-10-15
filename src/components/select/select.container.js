import React from 'react';
import SelectUI from './select.ui';

const SelectContainer = ({title, selected, onPress}) => {
  const color = title === selected ? 'black' : 'white';
  const backgroundColor = title !== selected ? 'black' : 'white';

  return (
    <SelectUI
      title={title}
      color={color}
      backgroundColor={backgroundColor}
      onPress={onPress}
    />
  );
};

export default SelectContainer;
