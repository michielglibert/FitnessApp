import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../components/HomeScreen';
import FoodNavigator from '../navigators/FoodNavigator';

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Food: {
      screen: FoodNavigator
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        switch (routeName) {
          case 'Home':
            iconName = `home`;
            break;
          case 'Food':
            iconName = 'utensils';
            break;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <FontAwesome5
            name={iconName}
            size={25}
            color={focused ? 'tomato' : 'gray'}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      style: {
        height: 60,
        paddingTop: 8,
        paddingBottom: 8
      }
    }
  }
);
