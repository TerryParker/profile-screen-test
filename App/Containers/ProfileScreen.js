import React, {Component} from 'react'
import {ScrollView, Text} from 'react-native'
//import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileScreenStyle'

function ProfileScreen () {
    return (
      <ScrollView style={styles.container}>
        <Text>Function worked</Text>
      </ScrollView>
    )
  }


export default ProfileScreen;
