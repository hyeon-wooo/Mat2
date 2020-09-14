import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShopMain from './shopMainScreen';
import TemplateDetail from './TemplateDetail';

const Stack = createStackNavigator();

const ShopHome = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerStyle: {backgroundColor: '#FBFBFB'}}}>
      <Stack.Screen
        name="ShopMain"
        component={ShopMain}
        options={{
          // title: '템플릿 마켓111',
          // headerTitleStyle: {fontFamily: 'sd_gothic_m'},
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TemplateDetail"
        component={TemplateDetail}
        options={{
          title: '템플릿 상세보기',
          headerTitleStyle: {fontFamily: 'sd_gothic_m'},
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopHome;
