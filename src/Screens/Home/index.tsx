import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import mainScreen from './mainScreen';
import selectMakingWayScreen from './Make/selectMakingWayScreen';
import inputDataScreen from './Make/inputDataScreen';
import selectMatLayoutScreen from './Make/selectMatLayoutScreen';
import tradeCode from './TradeCode';
import createCode from './TradeCode/createCode';
import enterCode from './TradeCode/enterCode';
import tradeQR from './TradeQR';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={mainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Make"
        component={selectMakingWayScreen}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="InputData"
        component={inputDataScreen}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectMatLayout"
        component={selectMatLayoutScreen}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="TradeCode"
        component={tradeCode}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="TradeQR"
        component={tradeQR}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateCode"
        component={createCode}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="EnterCode"
        component={enterCode}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
