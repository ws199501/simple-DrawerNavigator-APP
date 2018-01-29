//主页
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Navigator from '../../components/navigator'

export default class Login extends Component<{}> {
  render() {
    return (
      <View style={styles.box}>
        <Navigator
          name="登录"
          navigation={this.props.navigation}
          onReturn={() => this.props.navigation.goBack()}
        />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Main')
          }}
        >
          <Text>回主页</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
});
