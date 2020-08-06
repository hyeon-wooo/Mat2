import React, {useState} from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import WalletMain from "./walletMainScreen";
import WalletSearch from './walletSearchScreen';
import SelectGroup from './selectGroupScreen';
import EditCard from './editCardScreen'
import EditGroup from './editGroupScreen'
import ShowSingleCard from './showSingleScreen';
import MoveGroup from './moveGroupScreen';

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

        <Stack.Screen name='EditCard' component={EditCard} 
        options={{
            headerShown: false
        }}/>

        <Stack.Screen name='EditGroup' component={EditGroup} 
        options={{
            headerShown: false
        }}/>

        <Stack.Screen name='ShowSingleCard' component={ShowSingleCard} 
        options={{
            headerShown: false
        }}/>

        <Stack.Screen name='MoveGroup' component={MoveGroup} 
        options={{
            headerShown: false
        }}/>
    </Stack.Navigator>
    )
}

export default Wallet;