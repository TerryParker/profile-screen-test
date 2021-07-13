import React from 'react'
import {View} from 'react-native'
import styles from './Styles/AllActivitiesStyles'
import Collapser from './Collapser'

function AllActivities() {
        return (
            <View style={styles.container}>
            {Collapser("ALL ACTIVITIES", "This is all that you've done.... it's quite short.")}
            </View>
        )
}

export default AllActivities;