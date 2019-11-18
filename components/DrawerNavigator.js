import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83,

}

const DrawerNavigator = createDrawerNavigator(
    
    {
        Home: {
            screen: Home
        },
    },
    DrawerConfig
);

export default createAppContainer(DrawerNavigator);