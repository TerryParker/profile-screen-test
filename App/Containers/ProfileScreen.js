import React from 'react'
import {ScrollView, View} from 'react-native'
import CircleProfileImage from '../Components/CircleProfileImage'

// Styles
import styles from './Styles/ProfileScreenStyle'

function ProfileScreen () {
  

    return (
      <ScrollView style={styles.container}>
        <View style = {styles.viewContainer}>
        <CircleProfileImage/>
        </View>
      </ScrollView>
    )
  }


export default ProfileScreen;
