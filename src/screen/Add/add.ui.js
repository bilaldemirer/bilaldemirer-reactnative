import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './add.styles';
import {Button, Select, TextField} from '../../components';

const AddUI = ({
  productInfo,
  categories,
  setProductInfo,
  onPressAdd,
  onPressCategory,
}) => {
  const renderItem = ({item}) => (
    <Select
      title={item.name}
      selected={productInfo.category}
      onPress={onPressCategory}
    />
  );
  return (
    <SafeAreaView styles={styles.container}>
      <View style={styles.innerContainer}>
        <TextField
          name="Product Title"
          onChangeText={text => setProductInfo({title: text})}
          size="s"
        />
        <TextField
          name="Price"
          onChangeText={text => setProductInfo({price: parseInt(text, 10)})}
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
        <View>
          <FlatList
            style={{padding: 20}}
            data={categories}
            renderItem={renderItem}
            keyExtractor={item => item._id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Add Product" onPress={onPressAdd} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddUI;
