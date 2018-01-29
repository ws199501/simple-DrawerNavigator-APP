//主页
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Navigator from '../components/navigator'

export default class Main extends Component<{}> {
  render() {
    return (
      <View style={styles.content}>
        <Navigator
          name="主页"
          hideBack
          navigation={this.props.navigation}
          onReturn={() => this.props.navigation.goBack()}
        />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('DrawerOpen')
          }}
        >
          <Text>DrawerOpen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Login')
          }}
        >
          <Text>go Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
