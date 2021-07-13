import React from 'react'
import styles from './Styles/AboutSectionStyles'
import {View, Text} from 'react-native'
import user from '../../api/users/4932.json'

function AboutSection() {
    return(
    <View style={styles.container}>
        <Text style={styles.header}>About</Text>
        <View>
            <Text style={styles.about}>{user.about}</Text>
        </View>
        <View style={styles.skills}>
            {user.skills.map((item,key)=>(
                <Text style={styles.button} key={key}> { item } </Text>)
            )}

        </View>
    </View>
    )
}
export default AboutSection;