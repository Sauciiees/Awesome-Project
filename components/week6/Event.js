import React, { useEffect, useLayoutEffect } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import TourItem from "./TourItem";
import { Dimensions } from "react-native";
import { useState } from "react";

export default function Event(props) {
    const tours = [
        { "id": "1", "title": "Tour in London", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
        { "id": "2", "title": "Tour in Paris", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-2.jpg" },
        { "id": "3", "title": "Tour in Italy", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-3.jpg" },
        { "id": "4", "title": "Tour in Portugal", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-4.jpg" },
        { "id": "5", "title": "Tour in Netherlands", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-5.jpg" }
    ];
    const [onlineEvent, setOnlineEvent] = useState([]);



    const loadOnlineEvent = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineEvent(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    useLayoutEffect(() => {
        loadOnlineEvent();
    }, []);


    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Up coming Events</Text>
            <Text style={{ color: "grey" }}>What's the Worst That Could Happend</Text>
            <FlatList
                horizontal={true}
                data={onlineEvent}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 20,marginTop:6 }}>
                                <Image style={{ width: Dimensions.get("screen").width / 1.3, height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: item.uri }} />
                                <View style={{ flexDirection: 'row', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderWidth: 0.25, borderColor: 'black' }}>
                                    <View style={{ padding: 20 }}>
                                        <Text style={{ fontSize: 20, color: 'red', textAlign: "left" }}>{item.month}</Text>
                                        <Text style={{ fontSize: 13, color: 'gray', textAlign: "center" }}>{item.date}</Text>
                                    </View>
                                    <View style={{marginTop:10}}>
                                        <Text style={{fontSize:20,color:'black'}}>{item.title}</Text>
                                        <Text style={{color:'gray'}}>{item.datetime}</Text>
                                        <Text style={{color:'gray'}}>{item.place}</Text>
                                    </View>



                                </View>
                            </View>

                        );
                    }
                }
                keyExtractor={item => item.id}
            />


        </View>
    );
}

