import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

const Tile = ({ item: { location, source, title }, navigation }) => (
  <ImageBackground
    source={source}
    style={{
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ExploreAddItem', {
          item: { location, source, name: title },
          resetAction: StackActions.reset({
            index: 0,
            key: null,
            actions: [
              NavigationActions.navigate({
                routeName: 'Explore',
              }),
            ],
          }),
        })
      }
      style={{
        height: 200,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 4,
      }}
    >
      <Text style={[styles.text, { fontSize: 24 }]}>{title}</Text>
      <Text style={[styles.text, { fontSize: 16 }]}>{location}</Text>
    </TouchableOpacity>
  </ImageBackground>
);

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
  },
});

export default Tile;
