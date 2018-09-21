import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const Screen = ({ navigation, children }) => (
  <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
    <StatusBar barStyle="default" />
    {children}
  </SafeAreaView>
);

export default Screen;
