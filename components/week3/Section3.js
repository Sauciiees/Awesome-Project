import React from 'react';
import { Image, Text, View } from 'react-native';
import MyIcon from './Myicon';
import { FontAwesome } from '@expo/vector-icons';

export default function Section3() {
    return (
        <View style={{ padding : 20 ,marginTop:-90 }}>
        {/* View ก้อนที่ 1  */}
        <View style={{ flexDirection: "row", padding: 10 }}>
            <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require("../../assets/week3/profile-2.jpg")} />
            <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 20 }}>Exellent!</Text>
                <Text style={{ color: "gray" }}>see  259 views</Text>
            </View>
        </View>
        
    </View>    
);
}