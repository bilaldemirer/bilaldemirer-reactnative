/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Loading} from '../components';
import {useProduct} from '../contexts';
import {Add, Detail, Home} from '../screen';

const Stack = createStackNavigator();

export function AppNavigator() {
  const value = useProduct();
  const {loading} = value;

  if (loading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Add" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
