import React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';

export class FoodItem extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 50,
            backgroundColor: '#efefef',
            margin: 8,
            padding: 16,
            borderRadius: 3
          }}
        >
          <Text>{this.props.title}</Text>
          <Text>50 kcal</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default FoodItem;
