import React from 'react';
import { Image, Text, View } from 'react-native';


export default function Section7() {
    return (
        <View style={{ padding : 20  }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Image style={{ width: 100, height: 100, borderRadius: 5 }} source={require("../../assets/week3/room-1.jpg")} />
                <View style={{ paddingLeft: 10, justifyContent:'space-between' }}>
                    <Text style={{ fontSize: 20 }}>Standard twin room</Text>
                    <Text style={{ color: "red" }}>$4020.50</Text>
                    <Text style={{ color: "lightblue" }}>Hurry up!</Text>
                </View>
            </View>
            
        </View>    
    );
}

