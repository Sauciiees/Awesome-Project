import React from 'react';
import { Image, Text, View } from 'react-native';


export default function Section4() {
    return (
        <View style={{ padding : 20 ,borderTopWidth:0.5,width:400,borderBottomWidth:1, alignSelf:'center' }}>
       
            {/* View ก้อนที่ 3 */}
            <View style={{ padding : 10, marginTop:-20 }}>
                <Text style={{ fontSize : 20 }}>Hotel Description</Text>
                <Text style={{ color : '#444444' }}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
            </View>
        </View>    
    );
}
