import React from 'react'
import { Image, View, Text } from 'react-native'
import user from '../../api/users/4932.json'
import styles from './Styles/CircleProfileImage'

function CircleProfileImage() {
    return (
        <View style={styles.container}>
        <Image
        source={{uri: user.picture}}
        style={styles.image} 
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.position}>{user.position}</Text>
        </View>
    )
}
export default CircleProfileImage;