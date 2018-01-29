//乐搜app   route
import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation'
import { Dimensions, Text, ScrollView } from 'react-native';

import MainScreen from './containers/main'
import LeftBar from './containers/leftBar'
import LoginScreen from './containers/login'

const width = Dimensions.get('window').width - 100

const AppNavigator = DrawerNavigator({
  Main: { screen: MainScreen },
  Login: { screen: LoginScreen},
},{
  drawerWidth: width,
  contentComponent: LeftBar,
  // for drawer cofig bug
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
})

export default AppNavigator
