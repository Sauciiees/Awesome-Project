import React from "react";
import {  View,  TextInput } from "react-native";
import MyIcon from "./Myicon";

export default function Section5() {
  return (
    <View style={{ margin : 20 , padding : 10, borderWidth : 1, borderColor : 'gray',marginTop:10}}>
      <View style={{ flexDirection : "row", marginTop : 10  }}>
        <MyIcon title="wifi" name="wifi" size={20} color="orange" />
        <MyIcon title="coffee" name="coffee" size={20} color="orange" />
        <MyIcon title="bath" name="bath" size={20} color="orange" />
        <MyIcon title="paw" name="paw" size={20} color="orange" />
      </View>
     
    </View>
  );
}
