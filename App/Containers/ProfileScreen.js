import React from 'react'
import {ScrollView, View} from 'react-native'
import CircleProfileImage from '../Components/CircleProfileImage'
import SocialMedia from '../Components/SocialMedia'
import AboutSection from '../Components/AboutSection'
import LearnMore from '../Components/LearnMore'

// Styles
import styles from './Styles/ProfileScreenStyle'
import RecentActivity from '../Components/RecentActivity'

function ProfileScreen () {
  

    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
        <CircleProfileImage/>
        </View>
        <View style={styles.socialContainer}>
        <SocialMedia/>
        </View>
        <View style={styles.aboutContainer}>
          <AboutSection/>
        </View>
        <View style={styles.learnMoreContainer}>
          <LearnMore/>
        </View>
        <View style={styles.recentActivityContainer}>
          <RecentActivity/>
        </View>
      </ScrollView>
    )
  }


export default ProfileScreen;
