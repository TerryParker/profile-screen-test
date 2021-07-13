import React from 'react'
import {View, Text} from 'react-native'
import styles from './Styles/LearnMoreStyles'
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import Collapser from './Collapser'

function LearnMore() {
    return (
        <View style={styles.container}>
        {Collapser("LEARN MORE", "If you are wanting to learn more then you are in the rigth place.")}
        </View>
    )
}

export default LearnMore;