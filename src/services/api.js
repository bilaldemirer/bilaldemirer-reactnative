import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJkZW1pcmVyNzBAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL2JpbGFsZGVtaXJlciIsImlhdCI6MTY2NTg0MDc4MywiZXhwIjoxNjY2MjcyNzgzfQ.z0dOJ2ZxDc-FpF7FwUwKpqdvxJ2nP9sby094zShNyTA';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
};

/* ---------------------- CRUD FUNCTIONS ------------------------ */

const get = async url => {
  const result = await axios.get(
    `https://upayments-studycase-api.herokuapp.com/api/${url}`,
    {
      headers: headers,
    },
  );
  return result;
};

const post = async url => {
  const result = await axios.post(
    `https://upayments-studycase-api.herokuapp.com/api/${url}`,
    {
      headers: headers,
    },
  );
  return result;
};

/* -------------------- SPECIFIC FUNCTIONS ---------------------- */

const getAllProducts = async () => {
  const result = await get('products');
  return result;
};

const getProduct = async id => {
  return await get(`products/${id}`);
};

const postProduct = async () => {
  return await post('products');
};

const getAllCategories = async () => {
  return await get('categories');
};

const getCategory = async id => {
  return await get(`categories/${id}`);
};

module.exports = {
  getAllProducts,
  getProduct,
  postProduct,
  getAllCategories,
  getCategory,
};
