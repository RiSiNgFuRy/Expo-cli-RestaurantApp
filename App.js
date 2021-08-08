import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import { createStackNavigator } from 'react-navigation-stack';
import InfoScreen from './src/screens/InfoScreen';
import BottomTabNavigator from './components/BottomTabNavigator';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Info: InfoScreen,
  NavBar: BottomTabNavigator,
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Bussiness Search'
  }
});

export default createAppContainer(navigator);