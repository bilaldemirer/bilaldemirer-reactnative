/* eslint-disable react-hooks/exhaustive-deps */
import React, {useReducer} from 'react';
import {Alert} from 'react-native';
import {useEffect, useState} from 'react/cjs/react.development';
import {useProduct} from '../../contexts';
import AddUI from './add.ui';

const AddContainer = ({navigation, route}) => {
  const value = useProduct();
  const {postProduct, categories} = value;

  const [currentCategories, setCurrentCategories] = useState(categories || []);
  const initialState = {
    name: '',
    price: '',
    category: '',
    description: '',
    avatar: '',
    developerEmail: 'bdemirer70@gmail.com',
  };

  const [productInfo, setProductInfo] = useReducer(
    (state, updates) => ({...state, ...updates}),
    initialState,
  );

  useEffect(() => {
    if (categories) {
      let data = [];
      categories.forEach(category => {
        if (category.name !== 'All') {
          data.push(category);
        }
      });
      setCurrentCategories(data);
    }
  }, [categories]);

  const onPressAdd = async () => {
    const result = await postProduct(productInfo);
    console.log('result', result);

    if (result?.data?.message === 'Success') {
      navigation.goBack();
    } else {
      Alert.alert('Oppps!', 'An error occured!', [
        {
          text: '"Cancel',
          style: 'cancel',
        },
      ]);
    }
  };

  const onPressCategory = title => {
    setProductInfo({category: title});
  };

  return (
    <AddUI
      productInfo={productInfo}
      categories={currentCategories}
      setProductInfo={setProductInfo}
      onPressAdd={onPressAdd}
      onPressCategory={onPressCategory}
    />
  );
};

export default AddContainer;
