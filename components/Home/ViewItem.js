import React from 'react';
import { Alert, Button, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { completeItem, removeItem, updateItem } from '../../redux/actions';

class ViewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.navigation.getParam('item');
  }

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

  handleCancel = () => {
    const { navigation } = this.props;
    this.setState(navigation.getParam('item'), () =>
      navigation.setParams({ editable: false })
    );
  };

  handleSave = () => {
    const { dispatch, navigation } = this.props;

    dispatch(
      updateItem({ index: navigation.getParam('index'), item: this.state })
    );
    navigation.navigate('Home');
  };

  renderButtons = () => {
    const { navigation } = this.props;
    const { completed } = this.state;
    const editable = navigation.getParam('editable');

    return editable ? (
      <View>
        <Button onPress={this.handleSave} title="Save" />
        <Button color="tomato" onPress={this.handleCancel} title="Cancel" />
      </View>
    ) : (
      <View>
        {!completed && (
          <Button onPress={this.handleComplete} title="Complete" />
        )}
        <Button color="tomato" onPress={this.handleRemove} title="Remove" />
      </View>
    );
  };

  render() {
    const { navigation } = this.props;
    const { date, location, name } = this.state;
    const editable = navigation.getParam('editable');

    return (
      <View>
        <TextInput
          editable={editable}
          onChangeText={name => this.setState({ name })}
          value={name}
        />
        <TextInput
          editable={editable}
          onChangeText={location => this.setState({ location })}
          value={location}
        />
        <TextInput value={date.toLocaleDateString()} />
        {this.renderButtons()}
      </View>
    );
  }
}

export default connect()(ViewItem);
