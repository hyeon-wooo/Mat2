import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SelectCategory from './SelectCategoryScreen';
import ShowByCategory from './showByCategoryScreen';
import TemplateDetail from './TemplateDetail';

const Stack = createStackNavigator();

const Category = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerStyle: {backgroundColor: '#FBFBFB'}}}>
      <Stack.Screen
        name="SelectCategory"
        component={SelectCategory}
        options={{
          title: '상품 카테고리 선택',
          headerTitleStyle: {fontFamily: 'sd_gothic_b', fontSize: 20},
        }}
      />
      <Stack.Screen
        name="ShowByCategory"
        component={ShowByCategory}
        options={{
          // title: '',
          // headerTitleStyle: {fontFamily: 'sd_gothic_b', fontSize: 20},
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TemplateDetail"
        component={TemplateDetail}
        options={{
          title: '템플릿 상세보기',
          headerTitleStyle: {fontFamily: 'sd_gothic_b', fontSize: 20},
        }}
      />
    </Stack.Navigator>
  );
};

export default Category;
