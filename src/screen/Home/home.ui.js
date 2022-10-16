import React from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Select} from '../../components';
import {titleFormatter} from '../../utils/Formatter';
import {styles} from './home.styles';
import edit from '../../assets/edit.png';
import search from '../../assets/search.png';
import add from '../../assets/add.png';

const HomeUI = ({
  products,
  categories,
  currentCategory,
  loading,
  onPressCategory,
  navigateToDetail,
  navigateToAdd,
}) => {
  const renderItem = ({item}) => (
    <Select
      title={item.name}
      selected={currentCategory}
      onPress={onPressCategory}
    />
  );

  return (
    <SafeAreaView styles={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>UPayments Store</Text>
          <Image source={search} style={{width: 20, height: 20}} />
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
              <TouchableOpacity
                style={styles.productContainer}
                onPress={() => navigateToDetail(product._id)}>
                <View style={styles.productImage}>
                  <Image
                    source={{uri: product.avatar}}
                    style={{width: 100, height: 100}}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>
                    {titleFormatter(product.name)}
                  </Text>
                  <View style={styles.textInnerContainer}>
                    <Text style={styles.text}>{`$${product.price}`}</Text>
                    <Image source={edit} style={{width: 20, height: 20}} />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.add}>
        <TouchableOpacity style={styles.addBtn} onPress={() => navigateToAdd()}>
          <Image source={add} style={{width: 70, height: 70}} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeUI;
