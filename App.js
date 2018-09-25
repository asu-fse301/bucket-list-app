import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import Explore from './components/Explore';
import Home from './components/Home';
import Profile from './components/Profile';

const SimpleTabs = createBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      path: 'explore',
    },
    Home: {
      screen: Home,
      path: 'home',
    },
    Profile: {
      screen: Profile,
      path: 'profile',
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      title: 'Bucket List',
    },
    tabBarOptions: {
      activeTintColor: 'black',
    },
  }
);

class TabsContainer extends React.Component {
  static router = SimpleTabs.router;

  _onAction = a => {
    console.log('TABS EVENT', a.type, a);
  };

  render() {
    return (
      <Provider store={store}>
        <SimpleTabs navigation={this.props.navigation} />
      </Provider>
    );
  }
}

export default TabsContainer;
