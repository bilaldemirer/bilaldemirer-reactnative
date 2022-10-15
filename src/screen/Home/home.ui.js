import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Select} from '../../components';
import {styles} from './home.styles';

const HomeUI = ({products, categories, currentCategory, onPressCategory}) => {
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
          <Text style={styles.icon}>Icon</Text>
        </View>
        <View>
          <FlatList
            style={{padding: 20}}
            data={categories}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeUI;
