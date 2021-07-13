import React from 'react'
import {View, Text} from 'react-native'
import styles from './Styles/RecentActivityStyles'
import user from '../../api/users/4932.json'
import { Feather} from '@expo/vector-icons'

function RecentActivity() {


    return (
        <View>
        <View>
            <Text style={styles.header}>Recent activity</Text>
        </View>
        <View style={styles.skills}>
            {user.recentActivity.map((item)=>(
            <View style={styles.container}>
            <Feather name={item.icon} style={styles.icon} size={20}/>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.details}>{item.details}</Text>
            </View>)
            )}
        </View>
     </View>
    )
}

export default RecentActivity;