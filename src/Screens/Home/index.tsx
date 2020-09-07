import 'react-native-gesture-handler';
import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Encrypto from 'react-native-vector-icons/Entypo';
import MainScreen from '~/Screens/Home/mainScreen';
import Shop from '~/Screens/Shop';
import Wallet from '~/Screens/Wallet';
import More from '~/Screens/More';

import {
  imgMainActive,
  imgMainInactive,
  imgMarketActive,
  imgMarketInactive,
  imgMoreActive,
  imgMoreInactive,
  imgWalletActive,
  imgWalletInactive,
} from '~/Assets/Images';

import db from '~/DB';

const Tabs = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        // activeBackgroundColor: 'black',
        // inactiveBackgroundColor: 'black',
        showLabel: false,
      }}>
      <Tabs.Screen
        name="Home"
        component={MainScreen}
        options={{
          title: 'Hi Home',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={focused ? imgMainActive : imgMainInactive}
                style={{width: 25, height: 25}}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={focused ? imgWalletActive : imgWalletInactive}
                style={{width: 25, height: 25}}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={imgMarketInactive}
                style={{width: 23, height: 23}}
              />
            );
          },
          tabBarVisible: false,
        }}
      />
      <Tabs.Screen
        name="More"
        component={More}
        options={{
          // tabBarVisible: false,
          tabBarIcon: ({focused}) => {
            return (
              <Encrypto
                name="dots-three-horizontal"
                size={25}
                color={focused ? '#6078EA' : '#CFCFCF'}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

const App = () => {
  return <BottomTab />;
};

export default App;
