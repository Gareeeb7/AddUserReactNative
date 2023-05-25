/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import { Alert, SafeAreaView,
    ScrollView,
    Text,
    View,
    TextInput,
    Button
  } from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import styles  from './LayoutStyle'
import React, {Component} from 'react';
import RootScreen from '../RootComponent/RootScreen';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../../Navigators/AppNavigator';
import NavigationService from '../../Services/NavigationService';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Layout extends Component {

    constructor(props){
        super(props)
    this.state = {
        add: true,
        name:'',
        ueserName:'',
        email:'',
        items:[]
    }
    }
    validate(){
        if(this.state.name?.length == 0){
            Alert.alert('Name Required',"Name Can't be empty.")
            return
        }
        if(this.state.ueserName?.length == 0){
            Alert.alert('Name Required',"User Name Can't be empty.")
            return
        }
        if(this.state.ueserName?.length != 8){
            Alert.alert('User Name Invalid','User Name Need to 8 characters.')
            return
        }
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))){
            Alert.alert('Invalid Email','Please Emter a valid email.')
            return
        }else{
            this.setState({add:true})
        }
    }

    render() {
        const isDarkMode = true
        const backgroundStyle = {
            backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
            color: '#fff',
          };        
        return (
            <View>
               { this.state.add?<TouchableOpacity style={[{height:60},styles.sectionContainer]}> 
                    <Text style={styles.text} onPress={() => this.setState({add:false})} >+Add User</Text>
                </TouchableOpacity>
                :
                <View style={{alignItems:'center', marginTop:'2%', marginBottom:'3%', backgroundColor:'#FEDBD099'}}>
                    <View style={{flexDirection:'row', marginTop:'2%'}}>
                        <TextInput
                        placeholder=' Name'
                        style={{backgroundColor:'#fff', width:'85%',borderRadius:10}}
                        onChangeText={(e) => this.setState({name:e})}
                        />
                    </View>
                    <View style={{flexDirection:'row', marginTop:'2%'}}>
                        <TextInput
                        placeholder=' User Name'
                        style={{backgroundColor:'#fff', width:'85%',borderRadius:10}}
                        onChangeText={(e) => this.setState({ueserName:e})}
                        />
                    </View>
                    <View style={{flexDirection:'row', marginTop:'2%',marginBottom:'5%'}}>
                        <TextInput
                        placeholder=' Email'
                        style={{backgroundColor:'#fff', width:'85%',borderRadius:10}}
                        onChangeText={(e) => this.setState({email:e})}
                        />
                    </View>
                    <View  style={{flexDirection:'row', paddingVertical:20}}>
                        <View>
                            <Button
                                onPress={() => this.validate()}
                                title=" Add User "
                                color="#442c2e"
                                />
                        </View>
                        <View style={{marginLeft:20}} >
                            <Button
                                onPress={() => this.setState({add:true})}
                                title="   Close   "
                                color="#aaa"
                                />
                        </View>
                    </View>

                 

                </View>

                }
                <RootScreen/>
            
            </View>
        )
      }
}