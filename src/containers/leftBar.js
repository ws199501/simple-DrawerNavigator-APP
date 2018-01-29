//Home
import React, { Component } from 'react';
import { DrawerItems, SafeAreaView } from 'react-navigation'
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
          <View>
            <Text>这里是侧边抽屉</Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
});
