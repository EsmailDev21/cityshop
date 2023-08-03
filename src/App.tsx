import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from './screens/CartScreen';
import { Ionicons } from '@expo/vector-icons';
import { NativeBaseProvider, Text, Box, extendTheme } from "native-base";

import { Provider } from 'react-redux';
import { store } from './redux/store';
import { useSelector } from 'react-redux';
import { getCartItems } from './redux/cart/cartSlice';
import { useAppSelector } from './redux/reduxHooks/hooks';
import NavigationProvider from './NavigationProvider';
import MainScreen from './screens/MainScreen';
import SplashScreen from './screens/SplashScreen';
import { useFonts } from 'expo-font';
const Stack = createNativeStackNavigator();

export default function App() {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

const theme = extendTheme({
  fontConfig: {
    Montserrat: {
      100: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      200: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      300: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      400: {
        normal: "Roboto-Regular",
        italic: "Roboto-Italic",
      },
      500: {
        normal: "Roboto-Medium",
      },
      600: {
        normal: "Roboto-Medium",
        italic: "Roboto-MediumItalic",
      },
      // Add more variants
      //   700: {
      //     normal: 'Roboto-Bold',
      //   },
      //   800: {
      //     normal: 'Roboto-Bold',
      //     italic: 'Roboto-BoldItalic',
      //   },
      //   900: {
      //     normal: 'Roboto-Bold',
      //     italic: 'Roboto-BoldItalic',
      //   },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "Roboto",
    body: "Roboto",
    mono: "Roboto",
  },
});
  return (
    
 <Provider store={store}>
   <NativeBaseProvider>
    <NavigationContainer>
    <Stack.Navigator>
      
      <Stack.Screen name='splash' options={{headerShown:false}} component={SplashScreen} />
      <Stack.Screen name='main' options={{headerShown:false}} component={MainScreen} />
    </Stack.Navigator>
    </NavigationContainer>
      
  </NativeBaseProvider>
  </Provider>
  );
}

