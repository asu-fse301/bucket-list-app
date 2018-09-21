import React from 'react';
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';

class MemberInfo extends React.Component {
  state = {
    email: '',
    gender: null,
    name: '',
    notifications: true,
    private: true,
  };
  render() {
    return (
      <View
        style={{
          height: '64%',
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
          autoCapitalize="none"
          onChangeText={email => this.setState(() => ({ email }))}
          placeholder="Email"
          placeholderTextColor="grey"
          style={styles.textInput}
          value={this.state.email}
        />
        <View style={styles.switchView}>
          <Text style={{ color: 'grey' }}>Keep profile private</Text>
          <Switch
            onValueChange={value => this.setState(() => ({ private: value }))}
            value={this.state.private}
          />
        </View>
        <View style={styles.switchView}>
          <Text style={{ color: 'grey' }}>Receive notifications</Text>
          <Switch
            onValueChange={notifications =>
              this.setState(() => ({ notifications }))
            }
            value={this.state.notifications}
          />
        </View>
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

export default MemberInfo;
