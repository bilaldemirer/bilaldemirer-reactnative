import {StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 24,
  },
  buttonContainer: {
    alignSelf: 'center',
    top: windowHeight - 130,
    position: 'absolute',
  },
});
