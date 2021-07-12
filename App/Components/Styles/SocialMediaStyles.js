import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 250,
        paddingTop: 10
    },
    roundIcon: {
        width: 50,
        height: 50,
        backgroundColor: Colors.snow
    }
})
