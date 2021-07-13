import React from 'react'
import {View, Text} from 'react-native'
import styles from './Styles/CollapserStyles'
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native'

function Collapser  (header, text) {
    return(
        <View style={styles.container}>
            <Collapse>
                <CollapseHeader style={styles.container}>
                    <Text style={styles.header}>{header}</Text>
                </CollapseHeader>
                <CollapseBody style={styles.container}>
                    <Text style={styles.text}>{text}</Text>
                </CollapseBody>
            </Collapse>
        </View>
    )
}
export default Collapser;