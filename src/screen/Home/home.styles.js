import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 250,
  },
  productContainer: {
    width: windowWidth / 2 - 30,
    height: 220,
    backgroundColor: 'white',
    marginVertical: 10,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    borderRadius: 12,
  },
  productImage: {
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: 'black',
    height: 55,
    width: windowWidth / 2 - 30,
    borderRadius: 12,
    bottom: 0,
    position: 'absolute',
    padding: 5,
    justifyContent: 'space-between',
  },

  textInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  add: {
    position: 'absolute',
    backgroundColor: 'white',
    top: windowHeight - 50,
    height: 50,
    width: windowWidth,
  },
  addBtn: {
    left: windowWidth - 100,
    borderRadius: 50,
    bottom: 40,
    backgroundColor: 'white',
    width: 70,
    height: 70,
  },
});
