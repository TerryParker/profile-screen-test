import React from 'react'
import { Image, View, Text } from 'react-native'
import user from '../../api/users/4932.json'
import styles from './Styles/CircleProfileImage'
import {Badge} from 'react-native-elements'

function CircleProfileImage() {
    return (
        <View style={styles.container}>
            <View>
                <Image
                source={{uri: user.picture}}
                style={styles.image} 
                />
                <Badge value=" " containerStyle={styles.badgeStyle} status= {user.isOnline ? "success" : "error"}/>
            </View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.position}>{user.position}</Text>
        </View>
    )
}
export default CircleProfileImage;