import { View, Text, TouchableOpacity, Alert, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './RooScreenStyle.js'


export default function RootScreen() {

  const [items, setitems] = useState([])
  const [isloaded, setisloaded] = useState(false)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users',).then(res => {
      setitems(res.data)
      setisloaded(true)
    })
    .catch(error => {
      //Error handling
    });
  }, [])
  
  return (
          <ScrollView style={style.container}>
          {
             isloaded?items.map((y) => {
                  return (
                    <View style={style.box}>
                      <View style={style.boxRow}>
                          <Image source={{uri: 'https://www.rattanhospital.in/wp-content/uploads/2020/03/user-dummy-pic.png'}} style={style.avatar} />
                          <View style={style.boxcolumn}>
                              <View style={style.boxRow}>
                                <Text style={style.username}>{y.name}</Text>
                                <Text>{'0000'+y.id}</Text>
                              </View>
                              <Text>{y.username}</Text>
                              <View style={style.labelBox}>
                                  <Text style={style.label}>{y.email}</Text>
                              </View>
                          </View>
                        </View>
                    </View>
                  );
              })
              :
              <View style={style.box}>
              <View style={style.boxRow}>
                  <Image source={{uri: 'https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif'}} style={style.avatar} />
                  <View style={style.boxcolumn}>
                      <View style={style.boxRow}>
                        <Text style={style.username}>{''}</Text>
                        <Text>{''}</Text>
                      </View>
                      <Text style={style.username}>{'Loading...'}</Text>

                  </View>
                </View>
            </View>
          }
      </ScrollView>
  )
}

// const styles = StyleSheet.create(
//   {
//   container:{
//     paddingTop:10,
//     paddingBottom:0,
//     marginBottom:'40%',
//     backgroundColor: '#eee'
//   },
//   box:{
//     backgroundColor: '#fff',
//     marginLeft: 8,
//     marginRight: 8,
//     marginBottom: 8,
//     padding: 8,
//   },
//   boxRow:{
//     flexDirection: 'row',
//     alignContent: 'flex-end',
//   },
//   labelBox: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     alignContent: 'stretch',
//     marginTop: 5
//   },
//   label: {
//     borderWidth: 2,
//     borderRadius: 3,
//     borderColor: '#000',
//     paddingTop: 2,
//     paddingBottom: 0,
//     paddingLeft: 7,
//     paddingRight: 4,
//     marginBottom: 5,
//     marginRight: 3,
//   },
//   avatar:{
//     marginRight:10,
//     width:80,
//     height:80,
//   },
//   username:{
//     fontSize: 20,
//     flex: 1,
//   },
//   distance: {
//     flex: 1, flexDirection: 'row', justifyContent: 'flex-end'
//   },
//   boxcolumn:{
//     flexDirection: 'column',
//     width: 200
//   }
// })