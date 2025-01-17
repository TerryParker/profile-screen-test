import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    image: {
        width: 150, 
        height: 150, 
        borderRadius: 150/ 2
    },
    name: {
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 15,
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size.h5
        
    },
    position: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'gray',
        fontFamily: Fonts.type.base,
        fontSize: Fonts.size.medium
    },
    badgeStyle: {
        position: 'absolute',
        bottom: 3,
        right: 25,
      }
})
