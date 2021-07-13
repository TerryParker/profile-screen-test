import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 12
    },
    header: {
        fontSize: Fonts.size.h5,
        paddingLeft: 15,
        fontWeight: '500'
    },
    skills: {
        paddingTop: 20,
        paddingLeft: 20
    },
    date: {
        color: 'gray',
        fontSize: Fonts.size.regular,
        paddingLeft: 10
    },
    details: {
        fontSize: Fonts.size.regular,
        fontWeight: '500',
        paddingLeft: 5
    },
    icon: {
        color: 'gray',
    }
})
