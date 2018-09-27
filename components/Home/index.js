import React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Feather as FeatherIcon } from '@expo/vector-icons';
import AddItem from './AddItem';
import BucketList from './BucketList';
import ViewItem from './ViewItem';

const AddItemButton = connect(compose(({ items }) => ({ items })))(
  ({ items, navigation }) =>
    items.length > 0 && (
      <TouchableOpacity
        onPress={() => navigation.navigate('AddItem')}
        style={{ marginLeft: 8, marginRight: 8 }}
      >
        <FeatherIcon name="plus" size={24} color="black" />
      </TouchableOpacity>
    )
);

const HomeStack = createStackNavigator(
  {
    Home: {
      navigationOptions: ({ navigation }) => ({
        headerRight: <AddItemButton navigation={navigation} />,
      }),
      screen: BucketList,
    },
    AddItem,
    ViewItem: {
      navigationOptions: ({ navigation }) => ({
        headerRight: !navigation.getParam('editable') && (
          <Button
            onPress={() =>
              navigation.setParams({
                editable: true,
              })
            }
            title="Edit"
          />
        ),
      }),
      screen: ViewItem,
    },
  },
  {
    navigationOptions: {
      title: 'Home',
    },
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor, focused }) => (
    <FeatherIcon name="list" size={32} color={tintColor} />
  ),
};

export default HomeStack;
