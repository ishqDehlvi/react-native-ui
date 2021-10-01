//REACT NAVIGATION
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome';
import Onboard from './../screens/onboard';
import Onboard1 from './../screens/onboard1';
import Onboard2 from './../screens/onboard2';
import Mobilenumber from './../screens/mobilenumber';
import Otpnumber from './../screens/otpnumber';
import Otpverify from './../screens/otpverify';
import Page1 from './../screens/page1';
import Page2 from './../screens/page2';

import { colors } from './../components/styles';
const {primary, tertiary,brand} = colors;


const Stack = createNativeStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer
            screenOptions = {{
                headerStyle :{
                    backgroundColor: '#B5EAE0',
                },
                headerTintColor: '#B5EAE0',
                headerTitle:'',
                headerLeftContainerStyle: {
                    paddingLeft: 20}}}>
            <Stack.Navigator>
                <Stack.Screen name = "Welcome" component = {Welcome}/>
                <Stack.Screen name = "Login" component = {Login}/>
                <Stack.Screen name = "Signup" component = {Signup}/>
                <Stack.Screen name = "Onboard" component = {Onboard}/>
                <Stack.Screen name = "Onboard1" component = {Onboard1}/>
                <Stack.Screen name = "Onboard2" component = {Onboard2}/>
                <Stack.Screen name = "Mobilenumber" component = {Mobilenumber}/>
                <Stack.Screen name = "Otpnumber" component = {Otpnumber}/>
                <Stack.Screen name = "Otpverify" component = {Otpverify}/>
                <Stack.Screen name = "Page1" component = {Page1}/>
                <Stack.Screen name = "Page2" component = {Page2}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;