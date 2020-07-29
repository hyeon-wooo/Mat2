import React, {useState} from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import SelectCategory from './SelectCategoryScreen';

const Stack = createStackNavigator()

const Category = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SelectCategory' component={SelectCategory} />
        </Stack.Navigator>
    )
}

export default Category;