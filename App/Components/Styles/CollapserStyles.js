import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    header: {
        fontSize: Fonts.size.medium,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    text: {
        fontSize: Fonts.size.small,
        alignItems: 'center',
        color: 'gray'
    }
})
