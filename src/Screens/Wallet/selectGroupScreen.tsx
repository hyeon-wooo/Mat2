import React, {useState} from 'react';
import { View, Button } from 'react-native';

import { LogBox } from 'react-native';

// LogBox.ignoreWarnings([
//   'Non-serializable values were found in the navigation state',
// ]);
LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
])

interface Props {
    navigation:any;
    route:any;
}
const SelectGroup = ({navigation, route}: Props) => {
    return (
        <View>
            <Button title='1' onPress={() => {
                route.params.onGoBack(1);
                navigation.goBack();
            }} />
            <Button title='2' onPress={() => {
                route.params.onGoBack(2);
                navigation.goBack();
            }} />
        </View>
    )
}

export default SelectGroup;