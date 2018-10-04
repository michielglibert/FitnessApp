import React from 'react';
import {
  Modal,
  TouchableHighlight,
  View,
  Text,
  FlatList,
  Alert
} from 'react-native';
import _ from 'lodash';
import FoodItem from './FoodItem';
import ActionButton from 'react-native-action-button';

export default class FoodScreen extends React.Component {
  state = {
    modalVisible: false,
    data: [
      {
        id: 'a',
        title: 'Eggs',
        kcal: 50
      },
      {
        id: 'b',
        title: 'Protein shake',
        kcal: 200
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

  _renderItem = ({ item }) => (
    <FoodItem id={item.id} title={item.title} kcal={item.kcal} />
  );

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={{ margin: 16 }}>
            <View>
              <Text
                style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}
              >
                Add item
              </Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <View>
          <Text>Total kcal: {_.sumBy(this.state.data, 'kcal')}</Text>
        </View>
        <FlatList
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        />
      </View>
    );
  }
}
