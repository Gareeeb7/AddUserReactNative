/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create(
  {
    container:{
      paddingTop:10,
      paddingBottom:0,
      marginBottom:'30%',
      backgroundColor: '#fff',
    
    },
    box:{
      backgroundColor: '#FEDBD099',
      marginLeft: 8,
      marginRight: 8,
      marginBottom: 8,
      padding: 8,
      borderRadius:10
    },
    boxRow:{
      flexDirection: 'row',
      alignContent: 'flex-end',
    },
    labelBox: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignContent: 'stretch',
      marginTop: 5
    },
    label: {
      borderWidth: 2,
      borderRadius: 3,
      borderColor: '#000',
      paddingTop: 2,
      paddingBottom: 0,
      paddingLeft: 7,
      paddingRight: 4,
      marginBottom: 5,
      marginRight: 3,
    },
    avatar:{
      marginRight:10,
      width:80,
      height:80,
    },
    username:{
      fontSize: 20,
      flex: 1,
    },
    distance: {
      flex: 1, flexDirection: 'row', justifyContent: 'flex-end'
    },
    boxcolumn:{
      flexDirection: 'column',
      width: 200
    }
  }
)