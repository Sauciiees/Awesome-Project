import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export default function Bmi() {
    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [bmi, setBmi] = useState('0');
    const [description, setDescribtion] = useState('normal')

    console.log('STATE : ', weight, height, bmi, description);

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight / (height / 100 * height / 100));
        setBmi(output.toFixed(2));
        let description = "";
        if (output < 18.5)
            description = "Underweight - eat a bagel!";
        else if (bmi >= 18.5 && output <= 24.99)
            description = "Normal - keep it up!";
        else if (output >= 25 && output <= 29.99)
            description = "Overweight - exercise more!";
        else if (output >= 30 && output <= 39.99)
            description = "Obese - get off the couch!";
        else
            description = "Morbidly Obese - take action!";
        setDescribtion(description)
    };


    return (
        <View>
            {/* แถวที่ 1 */}
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, height: 100, justifyContent: "space-around", marginTop: 20 }}>
                <Text>Weight (kg.)</Text>
                <TextInput placeholder="Input your weight" keyboardType="numeric" value={weight} onChangeText={(newWeight) => setWeight(newWeight)} />
            </View>
            {/* แถวที่ 2 */}
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, height: 100, justifyContent: "space-around", marginTop: 20 }}>
                <Text>Height (cm.)</Text>
                <TextInput placeholder="Input your height" keyboardType='numeric' value={height} onChangeText={(newHeight) => setHeight(newHeight)}
                />
            </View>
            {/* แถวที่ 3 */}
            <View style={{ flexDirection: "row", marginVertical: 20 }}>
                <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 10, height: 100, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                    <Text>{bmi}</Text>
                </View>
                <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 10, height: 100, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                    <Text>{description}</Text>
                </View>
            </View>
            {/* แถวที่ 4 */}
            <Button title="Calculate" onPress={onPressButton} />
       

        </View >
    );
}
