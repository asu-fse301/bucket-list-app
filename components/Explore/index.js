import React from 'react';
import { Button, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Tile from './Tile';
import tileItems from './assets/tile-items';
import AddItem from '../Home/AddItem';

const Explore = ({ navigation }) => (
  <FlatList
    data={tileItems}
    horizontal={false}
    keyExtractor={({ title }) => title}
    renderItem={props => <Tile {...props} navigation={navigation} />}
  />
);

const ExploreStack = createStackNavigator(
  {
    Explore,
    ExploreAddItem: AddItem,
  },
  {
    navigationOptions: {
      headerRight: <Button onPress={() => {}} title="Filters" />,
      title: 'Explore',
    },
  }
);

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ tintColor, focused }) => (
    <FontAwesomeIcon name="globe" size={32} color={tintColor} />
  ),
};

export default ExploreStack;
