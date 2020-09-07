import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import MoreMain from './moreMainScreen';
import Auth from './authScreen';
import ChangePasswod from './changePwScreen';
import SelectMenu from './PointShop/selectMenuScreen';
import SelectItem from './PointShop/selectItemScreen';
import ItemList from './PointShop/itemList';
import ItemDetail from './PointShop/itemDetail';
import BuyItem from './PointShop/buyItem';
import Store from './PointShop/storeScreen';
import StoreItem from './PointShop/storeItem';
import Notice from './noticeScreen';

const Stack = createStackNavigator();

const More = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#FBFBFB', elevation: 1},
        headerTitleStyle: {
          fontFamily: 'sd_gothic_b',
          fontSize: 20,
          color: '#444444',
        },
      }}>
      <Stack.Screen
        name="MoreMain"
        component={MoreMain}
        options={{
          title: '더 보기',
        }}
      />
      <Stack.Screen
        name="Notice"
        component={Notice}
        options={{
          title: '공지사항',
        }}
      />
      <Stack.Screen
        name="AuthMain"
        component={Auth}
        options={{
          title: '계정',
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswod}
        options={{
          title: '비밀번호 변경',
        }}
      />
      <Stack.Screen
        name="SelectMenu"
        component={SelectMenu}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SelectItem"
        component={SelectItem}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ItemList"
        component={ItemList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ItemDetail"
        component={ItemDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuyItem"
        component={BuyItem}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Store"
        component={Store}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="StoreItem"
        component={StoreItem}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default More;
