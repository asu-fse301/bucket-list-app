import React from 'react';
import { Alert, Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { completeItem, removeItem } from '../../redux/actions';

class ViewItem extends React.Component {
  handleComplete = () => {
    const { dispatch, navigation } = this.props;

    dispatch(
      completeItem({
        index: navigation.getParam('index'),
      })
    );
    navigation.popToTop();
  };

  handleRemove = () => {
    const { dispatch, navigation } = this.props;
    const { name } = navigation.getParam('item');

    Alert.alert(
      'Confirm Delete',
      `Are you sure you'd like to delete ${name}?`,
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () =>
            dispatch(
              removeItem({
                index: navigation.getParam('index'),
              })
            ) && navigation.popToTop(),
        },
      ],
      { cancelable: true }
    );
  };

  render() {
    const { completed, date, location, name } = this.props.navigation.getParam(
      'item'
    );

    return (
      <View>
        <Text children={name} />
        <Text children={location} />
        <Text children={date.toLocaleDateString()} />
        {!completed && (
          <Button onPress={this.handleComplete} title="Complete" />
        )}
        <Button color="tomato" onPress={this.handleRemove} title="Remove" />
      </View>
    );
  }
}

export default connect()(ViewItem);
