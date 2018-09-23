import React from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import FoodItem from './FoodItem';

export default class FoodScreen extends React.Component {
  state = {
    data: [
      {
        id: 'a',
        title: 'Eggs'
      },
      {
        id: 'b',
        title: 'Protein shake'
      }
    ]
  };

  static navigationOptions = {
    title: 'Food',
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => <FoodItem id={item.id} title={item.title} />;

  render() {
    return (
      <View>
        <View>
          <Text>Total kcal: {_.sum(this.data.kcal)}</Text>
        </View>
        <FlatList
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
