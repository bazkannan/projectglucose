import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import Login from '../screens/Login';

/**
 * A component for DrawerNavigator
 */

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83,

}

const DrawerNavigator = createDrawerNavigator(
    
    {
        Home: {
            screen: Home
        },
        Login: {
            screen: Login
        },
    },
    DrawerConfig
);

export default createAppContainer(DrawerNavigator);