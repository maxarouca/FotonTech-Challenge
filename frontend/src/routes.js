import Main from './pages/main';
import Products from './pages/products';

import { createStackNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Home: Main,
  About: Products,
});

export default { StackNavigator };