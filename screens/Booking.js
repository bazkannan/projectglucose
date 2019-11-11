import React, { Component } from 'react';

import createStore from "../store/createStore";
import AppContainer from "../AppContainer";
import { View, Text, StyleSheet } from 'react-native';

class Booking extends Component {

    renderApp() {
        const initialState = window.__INITIAL_STATE__;
        const store = createStore(initialState);

        return (
            
            <View>
                <AppContainer store = {store} />
            </View>
        );
    }

    render() {
        return this.renderApp();
    }
}

export default Booking;

