import { createBottomTabNavigator } from 'react-navigation';

import Main from './pages/main';
import Products from './pages/products';

export default createBottomTabNavigator({
  Main,
  Products
});