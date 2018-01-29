//乐搜app
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import DrawerNavigator from './navigator'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="rgba(0, 0, 0, 0.3)" translucent={true} />
        <DrawerNavigator ref={nav => { this.navigator = nav }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
