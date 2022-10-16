/* eslint-disable react-hooks/exhaustive-deps */
import React, {useReducer} from 'react';
import {useEffect, useState} from 'react/cjs/react.development';
import {useProduct} from '../../contexts';
import AddUI from './add.ui';

const AddContainer = ({navigation, route}) => {
  const value = useProduct();
  const {postProduct, categories} = value;

  const [currentCategories, setCurrentCategories] = useState(categories || []);

  useEffect(() => {
    if (categories) {
      let data = categories.shift();
      setCurrentCategories(categories);
    }
  }, [categories]);

  const initialState = {
    title: 'Guitar',
    price: 1200,
    category: 'Hobby',
    //description: 'Description',
    avatar:
      'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
      developerEmail: 'bdemirer70@gmail.com',
  };

  const [productInfo, setProductInfo] = useReducer(
    (state, updates) => ({...state, ...updates}),
    initialState,
  );

  const onPressAdd = async () => {
    console.log('ddd', initialState);
    const result = await postProduct(productInfo);
    console.log('data: ', result);
    console.log('res: ', result?._response);
    console.log('config', result?.config);

    console.log('data', result?.data);
    // navigation.goBack();
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
