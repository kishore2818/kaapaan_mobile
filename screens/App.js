


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './LoginScreen'; // Make sure this file exists
import ViolationManagement from './ViolationManagement'; // Make sure this file exists
import VerifiedScreens from './VerifiedScreens'; // ✅ Make sure filename and name match
import Statistics from './Statistics';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ViolationManagement" component={ViolationManagement} />
        <Stack.Screen name="VerifiedScreens" component={VerifiedScreens} />
                <Stack.Screen name="Statistics" component={Statistics} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
