import React from 'react';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './detail.styles';
import {titleFormatter} from '../../utils/Formatter';

const DetailUI = ({product}) => {
  return (
    <SafeAreaView styles={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={{uri: product?.avatar}} style={styles.image} />
        <View style={styles.infoContainer}>
          <View style={styles.productHeader}>
            <Text style={styles.title}>{titleFormatter(product?.name)}</Text>
            <Text style={styles.price}>{`$${product?.price}`}</Text>
          </View>
          <Text style={styles.text}>{product?.description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailUI;
