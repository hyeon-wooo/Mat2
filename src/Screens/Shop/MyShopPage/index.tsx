import React from 'react';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MyPageMain from './MyPage';
import MakeByTem from './MakeByTem';
import TemDetail from './TemDetail';
import ConfirmCard from './ConfirmCard';

const Stack = createStackNavigator();
const MyPageStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyPageMain"
      screenOptions={{
        headerStyle: {backgroundColor: '#FBFBFB', elevation: 1},
        headerTitleStyle: {
          fontFamily: 'sd_gothic_b',
          fontSize: 20,
          color: '#444444',
        },
      }}>
      <Stack.Screen
        name="MyPageMain"
        component={MyPageMain}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MakeByTem"
        component={MakeByTem}
        options={{
          title: '템플릿으로 명함 제작',
        }}
      />
      <Stack.Screen
        name="TemDetail"
        component={TemDetail}
        options={{
          title: '구매 템플릿',
        }}
      />
      <Stack.Screen
        name="ConfirmCard"
        component={ConfirmCard}
        options={{
          title: '명함 확인',
        }}
      />
    </Stack.Navigator>
  );
};

const MyShopPage = () => {
  return <MyPageStack />;
};

export default MyShopPage;
