/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useProduct} from '../../contexts';
import HomeUI from './home.ui';

const HomeContainer = ({navigation}) => {
  const value = useProduct();
  const {products, categories} = value;


  const [currentCategory, setCurrentCategory] = useState('All');
  const [currentProducts, setCurrentProducts] = useState(products || []);

  useEffect(() => {
    filterProducts();
  }, [currentCategory, products]);


  const onPressCategory = title => {
    setCurrentCategory(title);
  };

  const filterProducts = () => {
    let filteredProducts;
    if (products) {
      filteredProducts = products?.filter(x => x.category === currentCategory);
      setCurrentProducts(
        filteredProducts?.length > 0 ? filteredProducts : products,
      );
    }
  };

  const navigateToDetail = _id => {
    navigation.navigate('Detail', {
      _id,
    });
  };

  const navigateToAdd = _id => {
    navigation.navigate('Add');
  };

  return (
    <HomeUI
      products={currentProducts}
      categories={categories}
      currentCategory={currentCategory}
      setCurrentCategory={setCurrentCategory}
      onPressCategory={onPressCategory}
      navigateToDetail={navigateToDetail}
      navigateToAdd={navigateToAdd}
    />
  );
};

export default HomeContainer;
