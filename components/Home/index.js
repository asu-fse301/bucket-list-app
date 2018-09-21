import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AddItem from './AddItem';
import BucketList from './BucketList';

const Home = ({ navigation }) => (
  <BucketList navigation={navigation} />
);

const AddItemButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('AddItem')}
    style={{ marginLeft: 8, marginRight: 8 }}
  >
    <FeatherIcon name="plus" size={24} color="black" />
  </TouchableOpacity>
);

const HomeStack = createStackNavigator(
  {
    Home: {
      // todo show conditionally based on whether the list is empty
      // navigationOptions: ({ navigation }) => ({
      //   headerRight: <AddItemButton navigation={navigation} />,
      // }),
      screen: Home,
    },
    AddItem,
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
