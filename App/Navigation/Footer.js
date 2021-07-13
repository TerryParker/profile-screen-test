import React from 'react'
import {View, Text} from 'react-native'
import styles from './Styles/FooterStyles'
import { AntDesign, Entypo } from '@expo/vector-icons'

function Footer() {

    handleClick = () => {
        alert('This would take you to the specific screen')  
    }

    return (
        <View style={styles.footer}>
        <AntDesign style={styles.icon} name="clockcircleo" size={30}
        onPress={this.handleClick}/>
        <Entypo style={styles.icon} name="suitcase" size={30}
        onPress={this.handleClick}/>
        <Entypo style={styles.icon} name="list" size={30}
        onPress={this.handleClick}/>
        <AntDesign style={styles.icon} name="table" size={30}
        onPress={this.handleClick}/>
        <AntDesign style={styles.icon} name="up" size={30}
        onPress={this.handleClick}/>
        </View>
    )
}

export default Footer;