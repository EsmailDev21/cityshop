import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { getCartItems } from './redux/cart/cartSlice';
import { useAppSelector } from './redux/reduxHooks/hooks';
import CartScreen from './screens/CartScreen';
import CHeckoutScreen from './screens/CHeckoutScreen';
import HomeScreen from './screens/HomeScreen';
const Tab = createBottomTabNavigator();
const NavigationProvider = () => {
    const cartBadgeValue = useAppSelector(getCartItems).length
  return (

     
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home-outline';
        } else if (route.name === 'Cart') {
          iconName = focused ? 'ios-cart' : 'ios-cart-outline';
        }else if (route.name === 'checkout') {
          iconName = focused ? 'ios-receipt' : 'ios-receipt-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#6366f1',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen name="Home"  options={{headerShown:false,title:""}} component={HomeScreen} />
      <Tab.Screen name="Cart"  options={{ tabBarBadge: cartBadgeValue,headerShown:false,title:"" }} component={CartScreen} />
      <Tab.Screen name="checkout"  options={{ headerShown:false,title:"" }} component={CHeckoutScreen} />
      
    </Tab.Navigator>
  
  )
}

export default NavigationProvider
