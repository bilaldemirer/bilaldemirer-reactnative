/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useState} from 'react/cjs/react.development';
import {useProduct} from '../../contexts';
import HomeUI from './home.ui';

const HomeContainer = () => {
  const value = useProduct();
  const {products, categories, getCategory, getProduct} = value;

  const [currentCategory, setCurrentCategory] = useState('All');

  const fetchCatergory = async id => {
    // const id = '62e638fd1126b53e1c7deb65';
    const data = await getCategory(id);

    console.log('data: ', data);
  };

  const fetchProuduct = async id => {
    // const id = '63482217f560b83dfb4b14f2';
    const data = await getProduct(id);

    console.log('data: ', data);
  };

  const onPressCategory = title => {
    setCurrentCategory(title);
  };

  return (
    <HomeUI
      products={products}
      categories={categories}
      currentCategory={currentCategory}
      setCurrentCategory={setCurrentCategory}
      onPressCategory={onPressCategory}
    />
  );
};

export default HomeContainer;
