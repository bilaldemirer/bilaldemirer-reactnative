import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    backgroundColor: 'white',
  },
  image: {
    width: windowWidth,
    height: windowWidth,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    backgroundColor: 'black',
    padding: 24,
    height: windowWidth,
    marginTop: 50,
    borderTopEndRadius: 24,
    borderTopLeftRadius: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
  },
});
