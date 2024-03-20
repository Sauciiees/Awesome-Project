import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Section1() {
    return (
        <View style={{ padding: -20 }}>
            <View style={{ flexDirection: "row", backgroundColor:'gray' }}>
                <View style={{ backgroundColor : '#50E3C2' , height : 100  }}></View>
                <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 2 / 1 }} source={require("../../assets/week3/room-6.jpg")} />
            </View>
            



        </View>
        

    );
}