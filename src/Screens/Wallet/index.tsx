import React, {useState} from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import WalletMain from "./walletMainScreen";
import WalletSearch from './walletSearchScreen';
import SelectGroup from './selectGroupScreen';
const Stack = createStackNavigator();

const Wallet = () => {
    return (
    <Stack.Navigator initialRouteName='WalletMain'>
        <Stack.Screen name='WalletMain' component={WalletMain} 
        options={{
            headerShown: false
        }}/>

        <Stack.Screen name='WalletSearch' component={WalletSearch} 
        options={{
            headerShown: false
        }}/>

        <Stack.Screen name='SelectGroup' component={SelectGroup} 
        options={{
            headerShown: false
        }}/>
    </Stack.Navigator>
    )
}

export default Wallet;