import React, {useState} from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Step1 from './Step1Screen';
import Step2 from './Step2Screen';

const Stack = createStackNavigator()

const UploadTemplate = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='UploadStep1' component={Step1} />
            <Stack.Screen name='UploadStep2' component={Step2} />
        </Stack.Navigator>
    )
}

export default UploadTemplate;