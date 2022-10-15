import React from 'react';
import {View, Text, FlatList, ScrollView, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Select} from '../../components';
import {styles} from './home.styles';

const HomeUI = ({
  products,
  categories,
  currentCategory,
  loading,
  onPressCategory,
}) => {
  const renderItem = ({item}) => (
    <Select
      title={item.name}
      selected={currentCategory}
      onPress={onPressCategory}
    />
  );

  if (loading) {
    return;
  }

  console.log('product: ', products[0]);

  return (
    <SafeAreaView styles={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>UPayments Store</Text>
          <Text style={styles.icon}>Icon</Text>
        </View>
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
        <ScrollView contentContainerStyle={styles.listContainer}>
          {products.map(product => {
            return (
              <TouchableOpacity style={styles.productContainer}>
                <View style={styles.productImage}>
                  <Image
                    source={{uri: product.avatar}}
                    style={{width: 100, height: 100}}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>{product.name}</Text>
                  <View style={styles.textInnerContainer}>
                    <Text style={styles.text}>{product.price}</Text>
                    <Text style={styles.text}>{product.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeUI;
