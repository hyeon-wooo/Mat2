import React from 'react';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabs from './Screens/Home';
import selectMakingWayScreen from './Screens/Home/Make/selectMakingWayScreen';
import inputDataScreen from './Screens/Home/Make/inputDataScreen';
import selectMatLayoutScreen from './Screens/Home/Make/selectMatLayoutScreen';
import selectBackgroundScreen from './Screens/Home/Make/selectBackgroundScreen';
import detailScreen from './Screens/Home/Make/detailScreen';
import tradeCode from './Screens/Home/TradeCode';
import createCode from './Screens/Home/TradeCode/createCode';
import selectCardToSend from './Screens/Home/TradeCode/selectCardToSendScreen';
import enterCode from './Screens/Home/TradeCode/enterCode';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeTabs}
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
        options={{title: '명함 제작'}}
      />
      <Stack.Screen
        name="SelectMatLayout"
        component={selectMatLayoutScreen}
        options={{title: '레이아웃 선택'}}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectBackground"
        component={selectBackgroundScreen}
        options={{title: '배경 선택'}}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={detailScreen}
        options={{title: '명함 확인'}}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="TradeCode"
        component={tradeCode}
        options={{
          title: '명함교환',
          headerTitleStyle: {fontFamily: 'sd_gothic_b'},
        }}
      />
      <Stack.Screen
        name="CreateCode"
        component={createCode}
        // options={{headerShown: false}}
        options={{
          title: '교환번호 생성',
          headerTitleStyle: {fontFamily: 'sd_gothic_b'},
        }}
      />
      <Stack.Screen
        name="EnterCode"
        component={enterCode}
        options={{
          title: '교환번호 입력',
          headerTitleStyle: {fontFamily: 'sd_gothic_b'},
        }}
      />
      <Stack.Screen
        name="SelectCardToSend"
        component={selectCardToSend}
        options={{
          title: '카드 선택',
          headerTitleStyle: {fontFamily: 'sd_gothic_b'},
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default App;
