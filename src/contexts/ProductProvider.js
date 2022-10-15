import React, {createContext, useContext, useState, useEffect} from 'react';
import * as ProductAPI from '../services/api';

const ProductContext = createContext(null);

export const useProduct = () => useContext(ProductContext);

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = async () => {
    setLoading(true);

    try {
      const result = await ProductAPI.getAllProducts();
      setProducts(result.data.products);
    } catch (error) {
      console.log('error: ', error);
    }
    setLoading(false);
  };

  const getCategories = async () => {
    setLoading(true);

    try {
      const result = await ProductAPI.getAllCategories();
      var categoriesArray = result.data.categories;
      categoriesArray.unshift({
        id: 0,
        name: 'All',
      });
      setCategories(categoriesArray);
    } catch (error) {
      console.log('error: ', error);
    }
    setLoading(false);
  };

  const getCategory = async id => {
    setLoading(true);

    try {
      const result = await ProductAPI.getCategory(id);
      return result.data;
    } catch (error) {
      console.log('error: ', error);
    }

    setLoading(false);
  };

  const getProduct = async id => {
    setLoading(true);

    try {
      const result = await ProductAPI.getProduct(id);
      return result.data;
    } catch (error) {
      console.log('error: ', error);
    }
    setLoading(false);
  };

  const postProduct = async () => {
    setLoading(true);

    const productData = [];

    try {
      const result = await ProductAPI.postProduct(productData);
      return result;
    } catch (error) {
      console.log('error: ', error);
    }
    setLoading(false);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        categories,
        getCategory,
        getProduct,
        postProduct,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
