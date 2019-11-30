import React, { Component } from 'react';

import createStore from "../store/createStore";
import AppContainer from "../AppContainer";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, AsyncStorage, Button, Linking, ActivityIndicator, Keyboard, TextInput } from 'react-native';
import { Permissions, Location } from 'expo';
import MapView, { Polyline, Marker } from 'react-native-maps';
import { DestinationButton } from '../components/DestinationButton';
import { CurrentLocationButton } from '../components/CurrentLocationButton';
import { Driver } from '../components/Driver';
import Icon from 'react-native-vector-icons/FontAwesome';
import Constants from 'expo-constants';
import axios from 'axios';
import socketIO from 'socket.io-client';
import PolyLine from '@mapbox/polyline';
import _ from 'lodash';
import { createStackNavigator, createAppContainer } from 'react-navigation';


const WIDTH = Dimensions.get('window').width;

export default class Booking extends Component {

    static navigationOptions = {
        headerTransparent: true,
        title: 'On-Call',
        headerTitle: 'On-Call',
        headerStyle: { borderBottomWidth: 0 }
    }; 

    constructor(props) {
        super(props);
        this.state = {
            region: null,
        };
    }

    centerMap() {
        const { 
            latitude, 
            longitude, 
            latitudeDelta,
            longitudeDelta 
        } = this.state.region;

        this.map.animateToRegion({
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta
        })
    }

    render() {
        return (
            <View style = {styles.container}>
                
                
                <DestinationButton />
                <CurrentLocationButton cb={() => { this.centerMap() }} />
                
                <MapView
                    initialRegion={this.state.region}
                    showsCompass={true}
                    showsUserLocation={true}
                    rotateEnabled={false}
                    ref = {(map) => {this.map = map}}
                    style={styles.map}
                >
                    {/* <Driver driver={{
                        uid: 'null', location: {
                            latitude: 37.78825,
                            longitude: -122.4324,
                        }
                    }} /> */}
                </MapView>
                
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    map: {
        position: 'absolute',
        flex: 1,
        zIndex: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        
    },
    
});



