import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '~/Screens/Home';
import Settings from '~/Screens/Settings';

const Tabs = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Settings" component={Settings} />
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
