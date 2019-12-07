import React, { Component }  from 'react';
import { StyleSheet } from 'react-native';
import {IonIcons } from '@expo/vector-icons';

/**
 * This is the component for the Menu Button.
 */

export default class MenuButton extends Component {
    render() {
        return (
            <IonIcons 
                name="md-menu"
                color = "#000000"
                size = {32}
                style = {StyleSheet.menuIcon}
                onPress = {() => {}}

            />
        );
    }
}

const styles = StyleSheet.create({
    menuIcon: {
        zIndex: 9,
        position: 'absolute',
        top: 40,
        left: 20,
    }
});