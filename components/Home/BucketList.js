import React from 'react';
import { Button, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import {
  Entypo as EntypoIcon,
  Feather as FeatherIcon,
} from '@expo/vector-icons';

class BucketList extends React.Component {
  state = { items: [] };

  componentDidUpdate(prevProps) {
    const { navigation } = this.props;

    if (
      !!navigation.getParam('item') &&
      !prevProps.navigation.getParam('item')
    ) {
      this.setState(
        ({ items }) => ({
          items: [...items, navigation.getParam('item')],
        }),
        () =>
          navigation.setParams({
            item: null,
            totalItems: this.state.items.length,
          })
      );
    }
  }

  addItem = () => {
    this.props.navigation.navigate('AddItem');
  };

  renderItems = () => {
    return (
      <ScrollView style={{ width: '100%' }}>
        {this.state.items.map((item, index) => (
          <TouchableOpacity
            key={`item-${index}`}
            style={{
              backgroundColor: 'white',
              borderColor: 'lightgrey',
              borderLeftColor: 'transparent',
              borderRightColor: 'transparent',
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 4,
              width: '100%',
            }}
          >
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontSize: 24 }}>{item.name}</Text>
              <Text style={{ color: 'grey', fontSize: 12 }}>
                {item.date.toLocaleDateString()}
              </Text>
            </View>
            <EntypoIcon name="chevron-thin-right" size={24} color="grey" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  renderZeroContentPlaceHolder = () => {
    return (
      <View
        style={{
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '48%',
          paddingTop: '24%',
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <FeatherIcon name="list" size={40} color="grey" />
        </View>
        <Text style={{ color: 'grey' }}>
          You have no items on your bucket list
        </Text>
        <Button onPress={this.addItem} title="Add Item" />
      </View>
    );
  };

  render() {
    return this.state.items.length
      ? this.renderItems()
      : this.renderZeroContentPlaceHolder();
  }
}

export default BucketList;
