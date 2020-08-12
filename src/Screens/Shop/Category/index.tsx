import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SelectCategory from './SelectCategoryScreen';
import ShowByCategory from './showByCategoryScreen';

const Stack = createStackNavigator();

const Category = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SelectCategory" component={SelectCategory} />
      <Stack.Screen name="ShowByCategory" component={ShowByCategory} />
    </Stack.Navigator>
  );
};

export default Category;
