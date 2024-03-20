import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Welcome from './screens/Welcome';
import Ex01 from './screens/week2/Ex01';
import Ex02 from './screens/week2/Ex02';
import Ex03 from './screens/week2/Ex03';
import Ex04 from './screens/week2/Ex04';
import Ex05 from './screens/week2/Ex05';
import Ex06 from './screens/week2/Ex06';
import Ex07 from './screens/week2/Ex07';
import Ex08 from './screens/week2/Ex08';
import Ex09 from './screens/week2/Ex09';
import Ex010 from './screens/week2/Ex10';
import Ex11 from './screens/week2/Ex11';
import Ex12 from './screens/week2/Ex12';
import { View, Alert, Button, Text, TextInput, Image, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Greeting from './components/Greeting';
import Travel from './screens/week3/Travel';
import { PaperProvider } from 'react-native-paper';
import TestPaper from './screens/week4/Testpaper';
import Resort from './screens/week3/Resort';
import Health from './screens/week5/Health';
import ChartKitScreen from './screens/week5/ChartKitScreen';
import Home from './screens/week6/Home';
import FlatListExample from './screens/week6/FlatListExample';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';
import BottomTab from './navigations/BottomTab';
import RootStack from './navigations/RootStack';


export default function App() {
  return (
    <NavigationContainer>
      {/* <HomeStack /> */}
      {/* <BottomTab/> */}
      <RootStack/>
    </NavigationContainer>
    // <Welcome />
    // <Ex01 />
    // <Ex02 />
    // <Ex03 />
    // <Ex04 />
    // <Ex05 />
    // <Ex06/>
    // <Ex07/>
    // <Ex08/>
    // <Ex09 />
    // <Ex010 />
    // <Ex11/>
    // <Ex12/>
    // <View style={{ flex: 1, marginyop: 25 }}>
    //   <TextInput
    //     keyboardType="email-address"
    //     autoCapitalize="none"
    //     autoCorrect={false}
    //     maxLength={30}
    //     multiline={false}
    //     placeholder="Please enter your email"
    //     returnKeyType="next"
    //     onChangeText={(text) => { }}
    //     value="Default text"
    //   />

    //   <Button
    //     title="Press me"
    //     onPress={() => Alert.alert("Simple Button pressed")}
    //     color="#665544"

    //   />
    //   <Text> Hello World </Text>
    //   <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width: 50, height: 50 }} />
    //   <View style={{ flex: 1, flexDirection: 'column' }}>
    //     {/* Fixed Size */}
    //     <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
    //       <Image style={{ width: 150, height: 100 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
    //       <Image style={{ width: 150, height: 150 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
    //       <Image style={{ width: 150, height: 150, borderRadius: 150 / 2 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
    //     </View>
    //   </View>
    //   <FontAwesome name="heart" size={32} color="orange" />
    //   <Greeting name='Rexxar' />
    //   <Greeting name='Jaina' />
    //   <Greeting name='Valeera' />







    // </View>
    // <Travel/>
    // <PaperProvider>
    //   <TestPaper />
    // </PaperProvider>
    // <Resort/>
    // <Health/>
    // <ChartKitScreen/>
    // <Home/>
    // <FlatListExample/>
    




  );
}


