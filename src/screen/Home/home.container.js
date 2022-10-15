/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useState} from 'react/cjs/react.development';
import {useProduct} from '../../contexts';
import HomeUI from './home.ui';

const HomeContainer = ({navigation}) => {
  const value = useProduct();
  const {products, categories, getCategory, getProduct, loading} = value;

  const [currentCategory, setCurrentCategory] = useState('All');
  const [currentProducts, setCurrentProducts] = useState(products || []);

  useEffect(() => {
    filterProducts();
  }, [currentCategory, products]);

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

  return (
    <HomeUI
      products={currentProducts}
      categories={categories}
      currentCategory={currentCategory}
      setCurrentCategory={setCurrentCategory}
      loading={loading}
      onPressCategory={onPressCategory}
      navigateToDetail={navigateToDetail}
    />
  );
};

export default HomeContainer;
