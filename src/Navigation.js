import {createStackNavigator} from 'react-navigation-stack';

import {createAppContainer} from 'react-navigation';
import Home from './Screen/Home';

const MainNavigation = createStackNavigator(
  {
    Home,
  },
  {
    headerMode: 'none',
    initialRouteKey: 'Home',
  },
);

export default createAppContainer(MainNavigation);
