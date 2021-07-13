import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 25
    },
    header: {
        fontSize: Fonts.size.h4

    },
    about: {
        paddingTop: 15,
        color: 'gray'
    },
    skills: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginTop: 15,
        marginBottom: 20,

    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 5,
        backgroundColor: '#e6ecff',
        marginHorizontal: "1%",
        marginBottom: 6,
        textAlign: 'center',
        color: '#3366ff',
    }
})
