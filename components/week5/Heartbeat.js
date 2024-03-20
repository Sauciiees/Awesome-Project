import React from "react";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Heartbeat() {    
    return (
        <View>
                 <View style={{ flexDirection: "row", padiing: 20, alignContent: 'space-around' }}>
                <TouchableOpacity onPress={onPressButton} style={{flex:1}}>
                    <FontAwesome name='heart' color='orange'/>
                        
                    
                </TouchableOpacity>
                <Text>45exit9</Text>

            </View>
            
        </View>
    );
}
