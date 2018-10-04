import React from 'react'
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';

import Main from './pages/main';
import Products from './pages/products';

export default createBottomTabNavigator({
  Main: {
    screen: Main,
    navigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        showLabel: false
      },
      tabBarIcon: <Icon name="home" size={22} color="#999" />
    }),
  },
  Products: {
    screen: Products,
    navigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        showLabel: false
      },
      tabBarIcon: <Icon name="shoppingcart" size={22} color="#999" />
    }),
  },
});