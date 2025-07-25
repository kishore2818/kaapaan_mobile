


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import LoginScreen from './LoginScreen'; // Make sure this file exists
// import ViolationManagement from './ViolationManagement'; // Make sure this file exists
// import VerifiedScreens from './VerifiedScreens'; // ✅ Make sure filename and name match
// import Statistics from './Statistics';



// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="ViolationManagement" component={ViolationManagement} />
//         <Stack.Screen name="VerifiedScreens" component={VerifiedScreens} />
//                 <Stack.Screen name="Statistics" component={Statistics} />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons'; // or whichever icon set you're using
import { View, ActivityIndicator } from 'react-native';

import LoginScreen from './LoginScreen';
import ViolationManagement from './ViolationManagement';
import VerifiedScreens from './VerifiedScreens';
import Statistics from './Statistics';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        ...MaterialIcons.font,
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

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
