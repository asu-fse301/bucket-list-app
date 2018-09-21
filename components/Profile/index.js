import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MemberInfo from './MemberInfo';
import Screen from '../Screen';

const Profile = ({ navigation }) => (
  <Screen navigation={navigation}>
    <MemberInfo navigation={navigation} />
    <Button onPress={() => {}} title="Send Feedback" />
  </Screen>
);

const ProfileStack = createStackNavigator(
  {
    Profile,
  },
  {
    navigationOptions: {
      title: 'Profile',
    },
  }
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ tintColor, focused }) => (
    <FeatherIcon name="user" size={32} color={tintColor} />
  ),
};

export default ProfileStack;
