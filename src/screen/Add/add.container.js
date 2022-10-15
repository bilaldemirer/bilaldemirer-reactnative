/* eslint-disable react-hooks/exhaustive-deps */
import React, {useReducer} from 'react';
import {useProduct} from '../../contexts';
import AddUI from './add.ui';

const AddContainer = ({navigation, route}) => {
  const value = useProduct();
  const {postProduct} = value;

  const initialState = {
    title: '',
    price: '',
    category: '',
    description: '',
    avatar: '',
    developerEmail: '',
  };

  const [productInfo, setProductInfo] = useReducer(
    (state, updates) => ({...state, ...updates}),
    initialState,
  );

  return <AddUI productInfo={productInfo} setProductInfo={setProductInfo} />;
};

export default AddContainer;
