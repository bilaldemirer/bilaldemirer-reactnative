/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ProductProvider} from './src/contexts';
import {AppNavigator} from './src/navigators/AppNavigator';

const App = () => {
  return (
    <ProductProvider>
      <AppNavigator />
    </ProductProvider>
  );
};

export default App;
