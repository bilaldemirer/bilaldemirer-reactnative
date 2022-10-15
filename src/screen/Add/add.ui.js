import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './add.styles';
import {TextField} from '../../components';

const AddUI = ({productInfo, setProductInfo}) => {
  console.log('ppppp: ', productInfo);
  return (
    <SafeAreaView styles={styles.container}>
      <View style={styles.innerContainer}>
        <Text>aaa</Text>
        <TextField
          name="Product Title"
          onChangeText={text => setProductInfo({title: text})}
          size="s"
        />
        <TextField
          name="Price"
          onChangeText={text => setProductInfo({price: text})}
          size="s"
        />
        <TextField
          name="Description"
          onChangeText={text => setProductInfo({description: text})}
          size="l"
        />
        <TextField
          name="Image Link"
          onChangeText={text => setProductInfo({avatar: text})}
          size="s"
        />
        <Text>{`Selected Category: ${productInfo.category}`}</Text>
      </View>
    </SafeAreaView>
  );
};

export default AddUI;
