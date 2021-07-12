import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    image: {
        width: 200, 
        height: 200, 
        borderRadius: 200/ 2
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
        
    },
    position: {
        textAlign: 'center',
        color: Colors.steel
    }
})
