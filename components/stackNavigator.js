import {createStackNavigator} from 'react-navigation-stack'

import Home from '../screens/Home';
import Preoperative from '../screens/Preoperative';
import OnTheDay from '../screens/OnTheDay';
import PreopResult from '../screens/PreopResult';
import Settings from '../screens/Settings';

export const HomeNavigation = createStackNavigator({
    Home: Home,
   
});

export const PreopNavigation = createStackNavigator({
    Preoperative: Preoperative
});

export const SettingsNavigation = createStackNavigator({
    Settings: Settings
});




