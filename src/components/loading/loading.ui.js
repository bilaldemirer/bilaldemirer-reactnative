import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const LoadingUI = () => {
  return (
    <View style={{flex: 1}}>
      <ActivityIndicator size="large" color={'black'} style={{flex: 1}} />
    </View>
  );
};

export default LoadingUI;
