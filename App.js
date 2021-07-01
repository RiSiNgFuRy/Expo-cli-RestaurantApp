import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import { createStackNavigator } from 'react-navigation-stack';
import InfoScreen from './src/screens/InfoScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Info: InfoScreen,
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Bussiness Search'
  }
});

export default createAppContainer(navigator);