import React, {useState} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import shopMainScreen from './shopMainScreen';
import MyPage from './MyPage';
import UploadTemplate from './UploadTemplate';
import Category from './Category'

const Tabs = createBottomTabNavigator()

interface Props {
    navigator: any;
    route: any;
}

const Shop = ({navigator, route}: Props) => {
    return (<Tabs.Navigator>
        <Tabs.Screen name='ShopHome' component={shopMainScreen}/>
        <Tabs.Screen name='Category' component={Category} />
        <Tabs.Screen name='UplodTemplate' component={UploadTemplate} />
        <Tabs.Screen name='MyShopPage' component={MyPage}/>
    </Tabs.Navigator>
    )
}

export default Shop;


