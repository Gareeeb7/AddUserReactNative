import { View, Text } from 'react-native'
import React from 'react'

export default function SplashScreen() {
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}


// import { SafeAreaView,
//   ScrollView,
//   Text,
//   Image,
//   View,
// } from 'react-native';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import styles  from './SplashStyle'
// import React, {Component} from 'react';
// import RootScreen from '../RootComponent/RootScreen';

// export default class SplashScreen extends Component {
//   render() {
//       const isDarkMode = true
//       const backgroundStyle = {
//           backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//           color: '#fff',
//         };
//       return (
//           <View
//           style={[styles.sectionContainer]}>
//             <Image  source={{uri:'https://media.tenor.com/hd7jyV_dMS8AAAAC/netflix-media-services-provider.gif'}} style={{height:100, width:20}} ></Image>
//         </View>
//       )
//     }
// }