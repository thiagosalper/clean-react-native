import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ProductScreen } from '../presentation/screens';
import { MainNavParamList } from '.';

const Stack = createNativeStackNavigator<MainNavParamList>();

const MainNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeRoute">
        <Stack.Screen 
          name="HomeRoute" 
          component={HomeScreen}
          options={{headerShown: false}} />
        <Stack.Screen 
          name="ProductRoute" 
          component={ProductScreen}
          options={{headerTitle: 'product details'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNav;
