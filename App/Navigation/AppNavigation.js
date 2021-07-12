import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ProfileScreen from '../Containers/ProfileScreen'
import React from 'react'
import View from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons'


import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    ProfileScreen: ProfileScreen,
  },
  {
    // Default config for all screens
    headerMode: 'screen',
    initialRouteName: 'ProfileScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
)

ProfileScreen.navigationOptions = {
  headerTitle: `Contact Details`,
  headerLeft: (
    <AntDesign name="pluscircleo" size={24} color="black" />
  ),
  headerRight: (
      //<AntDesign name="bells" size={24} color="black" />,
      <Entypo name="image" size={24} color="black" />
    
  )
};

export default createAppContainer(PrimaryNav)
