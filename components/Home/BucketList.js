import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { Feather as FeatherIcon } from '@expo/vector-icons';

class BucketList extends React.Component {
  state = { items: [] };

  componentDidMount() {
    const { navigation } = this.props;

    if (navigation.getParam('bucketListItems')) {
      this.setState(() => ({
        items: [...navigation.getParam('bucketListItems')],
      }));
    }
  }

  componentDidUpdate() {
    const { navigation } = this.props;

    if (navigation.getParam('bucketListItems')) {
      this.setState(() => ({
        items: [...navigation.getParam('bucketListItems')],
      }));
    }
  }

  addItem = () => {
    this.props.navigation.navigate('AddItem');
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
    if (!this.state.items.length) return this.renderZeroContentPlaceHolder();

    return <ScrollView style={{ flex: 1 }} />;
  }
}

export default BucketList;
