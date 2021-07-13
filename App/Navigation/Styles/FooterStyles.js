import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
    footer: {
        position: 'absolute',
        flex:0.1,
        left: 0,
        right: 0,
        bottom: -10,
        flexDirection:'row',
        height:80,
        alignItems:'center',
        borderTopWidth: 1,
        borderColor: Colors.cloud,
        justifyContent: "space-evenly",
        width: '100%'
    },
    icon: {
        paddingBottom: 30,
        color: 'gray'
    }
})
