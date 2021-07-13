import {StyleSheet} from 'react-native'
import {Colors, Fonts, Metrics} from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: Colors.steel
  },
  socialContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  aboutContainer: {
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: Colors.steel
  },
  learnMoreContainer: {
    paddingTop: 15,
  },
  recentActivityContainer: {
    paddingTop: 50,
    paddingBottom: 50,
    borderBottomWidth: 1,
    borderColor: Colors.steel
  },
  allActivitiesContainer: {
    paddingTop: 20,
    paddingBottom: 60,
  }
})
