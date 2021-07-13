import React from 'react'
import {SocialIcon} from 'react-native-elements'
import styles from './Styles/SocialMediaStyles'
import {View, Linking} from 'react-native'

function SocialMedia() {
    return(
    <View style={styles.container}>
        <View style={styles.iconContainer}>
        <SocialIcon
            iconColor= 'gray'
            button
            type='facebook'
            onPress={() => { Linking.openURL('https://facebook.com')}}
            style={styles.roundIcon}
        />
        <SocialIcon
            iconColor= 'gray'
            button
            type='pinterest'
            onPress={() => { Linking.openURL('https://pinterest.com')}}
            style={styles.roundIcon}
        />
        <SocialIcon
            iconColor= 'gray'
            button
            type='twitter'
            onPress={() => { Linking.openURL('https://twitter.com')}}
            style={styles.roundIcon}
        />
        <SocialIcon
            iconColor= 'gray'
            button
            type='linkedin'
            onPress={() => { Linking.openURL('https://linkedin.com')}}
            style={styles.roundIcon}
        />
        </View>
    </View>
    )
}
export default SocialMedia;