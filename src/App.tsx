import 'react-native-gesture-handler';
import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Encrypto from 'react-native-vector-icons/Entypo';
import HomeStack from '~/Screens/Home';
import Settings from '~/Screens/Settings';
import Shop from '~/Screens/Shop';
import Wallet from '~/Screens/Wallet';

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
        component={HomeStack}
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
                source={focused ? imgMarketActive : imgMarketInactive}
                style={{width: 25, height: 25}}
              />
            );
          },
          tabBarVisible: false
        }}
      />
      <Tabs.Screen
        name="Settings3"
        component={Settings}
        options={{
          title: '더보기',
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
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default App;
