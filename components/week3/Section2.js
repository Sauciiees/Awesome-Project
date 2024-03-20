import React from 'react';
import { Image, Text, View } from 'react-native';
import MyIcon from './Myicon';
import { FontAwesome } from '@expo/vector-icons';

export default function Section2() {
    return (
        <View style={{ felx: 1, padding: 25, marginTop: -50 }}>
            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
                <View style={{ backgroundColor: '#lightgray', height: 100, width: 400, }}>
                    <Text style={{ fontSize: 20, alignSelf: 'center' }}>Boston Hotel</Text>
                </View>
                <View style={{flexDirection:'row' , marginTop:-72}}>
                 <FontAwesome name='star' color='orange'></FontAwesome>
                 <FontAwesome name='star' color='orange'></FontAwesome>
                 <FontAwesome name='star' color='orange'></FontAwesome>
                 <FontAwesome name='star' color='orange'></FontAwesome>
                 <FontAwesome name='star' ></FontAwesome>
                 </View>
                <View style={{ height: 100, width: 220 , marginTop:5 , alignItems:'center'}}>
                <Text style={{ fontSize: 10,  }}>Facilities provided may range from a modest quality mattress in a small room to large suites </Text>
                </View>
            <View style={{flex:1, flexDirection:'row'}}>

                
            </View>
                
                

                

                
              

                    






            </View>








            </View>
            );
}