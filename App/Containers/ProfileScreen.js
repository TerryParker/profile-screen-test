import React from 'react'
import {ScrollView, View} from 'react-native'
import CircleProfileImage from '../Components/CircleProfileImage'
import SocialMedia from '../Components/SocialMedia'

// Styles
import styles from './Styles/ProfileScreenStyle'

function ProfileScreen () {
  

    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
        <CircleProfileImage/>
        </View>
        <View style={styles.socialContainer}>
        <SocialMedia/>
        </View>
      </ScrollView>
    )
  }


export default ProfileScreen;
