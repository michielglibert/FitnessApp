import { createStackNavigator } from 'react-navigation';
import FoodScreen from '../components/Food/FoodScreen';

export default createStackNavigator(
  {
    Food: FoodScreen
  },
  {
    initialRouteName: 'Food',
    navigationOptions: {
      headerTintColor: 'white',
      gesturesEnabled: false
    },
    cardStyle: {
      backgroundColor: 'white'
    }
  }
);
