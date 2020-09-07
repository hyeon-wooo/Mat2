import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ShopMain from './Home';
import MyPage from './MyShopPage';
import UploadTemplate from './UploadTemplate';
import Category from './Category';
import AndDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {imgUploadTemplateActive, imgUploadTemplate} from '~/Assets/Images';
import {Image} from 'react-native';

const Tabs = createBottomTabNavigator();

interface Props {
  navigator: any;
  route: any;
}

const Shop = ({navigator, route}: Props) => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        // activeBackgroundColor: 'black',
        // inactiveBackgroundColor: 'black',
        showLabel: false,
      }}>
      <Tabs.Screen
        name="ShopHome"
        component={ShopMain}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Entypo
                name="home"
                size={25}
                color={focused ? '#6078EA' : '#CFCFCF'}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <AndDesign
                name="tags"
                size={25}
                color={focused ? '#6078EA' : '#CFCFCF'}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="UplodTemplate"
        component={UploadTemplate}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? imgUploadTemplateActive : imgUploadTemplate}
              style={{width: 25, height: 25}}
            />
          ),
          tabBarVisible: false,
        }}
      />
      <Tabs.Screen
        name="MyShopPage"
        component={MyPage}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <FontAwesome5
                name="user"
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

export default Shop;
