/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useState} from 'react/cjs/react.development';
import {useProduct} from '../../contexts';
import DetailUI from './detail.ui';

const DetailContainer = ({navigation, route}) => {
  const {_id} = route.params;
  const value = useProduct();
  const {getProduct} = value;

  const [product, setProduct] = useState();

  useEffect(() => {
    fetchProduct(_id);
  }, [_id]);

  const fetchProduct = async id => {
    // const id = '63482217f560b83dfb4b14f2';
    const data = await getProduct(id);
    setProduct(data?.product);

    console.log('data: ', data);
  };

  return <DetailUI product={product} />;
};

export default DetailContainer;
