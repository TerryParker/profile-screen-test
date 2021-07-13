import React from 'react'
import {View, Text} from 'react-native'
import styles from './Styles/LearnMoreStyles'
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';

function LearnMore() {


    return (
        <View >
            <Collapse>
                <CollapseHeader style={styles.container}>
                    <Text style={styles.header}>LEARN MORE</Text>
                </CollapseHeader>
                <CollapseBody style={styles.container}>
                    <Text style={styles.text}>If you were wanting to learn more then you came to the right place.</Text>
                </CollapseBody>
            </Collapse>
        </View>
    )
}

export default LearnMore;