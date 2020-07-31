import React, {useState} from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Step1 from './Step1Screen';
import Step2 from './Step2Screen';
import Step3 from './Step3Screen';

const Stack = createStackNavigator()

const UploadTemplate = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='UploadStep1' component={Step1} />
            <Stack.Screen name='UploadStep2' component={Step2} />
            <Stack.Screen name='UploadStep3' component={Step3} />
        </Stack.Navigator>
    )
}

export default UploadTemplate;