import React from 'react';
import {
  Button,
  DatePickerIOS,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { addItem } from '../../actions';

class AddItem extends React.Component {
  state = {
    completed: false,
    date: new Date(),
    location: '',
    name: '',
    private: true,
  };

  componentDidMount() {
    const { navigation } = this.props;

    if (!!navigation.getParam('item')) {
      this.setState(() => ({ ...navigation.getParam('item') }));
    }
  }

  addItem = () => {
    const { dispatch, navigation } = this.props;

    dispatch(addItem(this.state));
    navigation.navigate('Home');
  };

  render() {
    return (
      <View
        style={{
          height: '96%',
          justifyContent: 'space-around',
          marginLeft: 8,
        }}
      >
        <TextInput
          autoCapitalize="words"
          onChangeText={name => this.setState(() => ({ name }))}
          placeholder="Name"
          placeholderTextColor="grey"
          style={styles.textInput}
          value={this.state.name}
        />
        <TextInput
          autoCapitalize="words"
          onChangeText={location => this.setState(() => ({ location }))}
          placeholder="Location"
          placeholderTextColor="grey"
          style={styles.textInput}
          value={this.state.location}
        />
        <View style={{ height: 160, marginRight: 8 }}>
          <DatePickerIOS
            date={this.state.date}
            onDateChange={date => this.setState(() => ({ date }))}
          />
        </View>
        <View style={styles.switchView}>
          <Text style={{ color: 'grey' }}>Share with community</Text>
          <Switch
            onValueChange={value => this.setState(() => ({ private: value }))}
            value={this.state.private}
          />
        </View>
        <Button onPress={this.addItem} title="Add Item" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  switchView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 8,
  },
  textInput: {
    borderColor: 'lightgrey',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderWidth: 1,
    height: 40,
  },
});

export default connect()(AddItem);
