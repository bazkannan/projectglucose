import {createStackNavigator} from 'react-navigation'

import Home from '../screens/Home';
import Preoperative from '../screens/Preoperative';
import OnTheDay from '../screens/OnTheDay';
import PreopResult from '../screens/PreopResult';

export const HomeNavigation = createStackNavigator({
    Home: Home
});

export const PreopNavigation = createStackNavigator({
    Preoperative: Preoperative
});




