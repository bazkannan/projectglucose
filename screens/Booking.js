import React, { Component } from 'react';

import createStore from "../store/createStore";
import AppContainer from "../AppContainer";
import mapStyle from '../assets/mapstyle'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    AsyncStorage,
    Button,
    Linking,
    ActivityIndicator,
    Keyboard,
    TextInput,
    Image
} from 'react-native';
import { Location } from 'expo';
import MapView, { Polyline, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
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
import * as Permissions from 'expo-permissions';


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
            markers: [],
            latitude: null,
            longitude: null,
            latitudeDelta: null,
            longitudeDelta: null,
            selectedLocation: {},
            showButton: false,
            showCancelButton: false
        };
    }

    async componentDidMount() {
        this.getLocationAsync();
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        this.watchId = navigator.geolocation.watchPosition(
            position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            },
            error => console.log(error),
            { enableHighAccuracy: true, maximumAge: 2000, timeout: 20000 }
        );

    }

    getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }
    };

    getPatients = async () => {
        console.log('get patients');
        const response = await axios.get('http://192.168.0.39:3001/getpatients').catch(err => console.log(err));
        await this.setState({markers: response.data});
    }

    centerMap = () => {
        console.log("CENTER MAP CALLED at: " + this.state.latitude + " " + this.state.longitude);
        const { latitude, longitude, latitudeDelta, longitudeDelta } = this.state;
        this.map.animateToRegion({
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }
        )
    }

    selectedPatient = async (latitude, longitude) => {
        console.log('called selectedpatients');
        await this.setState({selectedLocation: [latitude, longitude], showButton: true, showCancelButton: true});
        console.log(this.state.selectedLocation);

    }

    cancelButton = () => {
        this.setState({ showCancelButton: false, showButton: false});
    }

    showGoogleMaps = (latitude, longitude) => {
        console.log(latitude, longitude);
        Linking.openURL(
            `https://www.google.com/maps/dir/?api=1&destination=${
                latitude
            },${longitude}&travelmode=driving`
        );
    }


    render() {
        let display;
        let directionsbutton = null;
        let cancelbutton = null;

        if (this.state.markers == null) {
            display = <ActivityIndicator size = "large" color = "black" />;
        } else {
            display = this.getPatients;
        }

        if (this.state.showButton === true && this.state.showCancelButton === true) {
            directionsbutton = (
                <TouchableOpacity
                    style={styles.goToPatientButton}
                    onPress={() => this.showGoogleMaps(this.state.selectedLocation[0], this.state.selectedLocation[1])}
                >
                    <Text style={styles.bottomButtonText}>Get Directions</Text>
                </TouchableOpacity>
            );
            cancelbutton = (
                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={()=> this.cancelButton()}
                >
                    <Text style={styles.bottomButtonText}>Cancel</Text>
                </TouchableOpacity>
            );
        }

        return (
            <View style = {styles.container}>
                <DestinationButton cb={()=> { this.getPatients().then(() => { this.centerMap().catch((err) => console.log(err))}) }}/>
                <CurrentLocationButton cb={() => { this.centerMap() }} />

                <MapView
                    provider={PROVIDER_GOOGLE}
                    initialRegion={this.state.region}
                    showsCompass={true}
                    showsUserLocation={true}
                    rotateEnabled={false}
                    ref = {(map) => {this.map = map}}
                    style={styles.map}
                    customMapStyle={mapStyle}
                >

                    {this.state.markers.map(marker => (
                        <Marker
                            coordinate={{ latitude: marker.latitude, longitude: marker.longitude}}
                            title={"PATIENT NAME: " + marker.name}
                            description={ "SYMPTOMS: " + marker.symptoms + "\nAGE: " + marker.age + "\nCONDITION: " + marker.condition + "\nCONTACT DETAILS: " + marker.contact + "\nE-MAIL: " + marker.email}
                            onPress={() => this.selectedPatient(marker.latitude, marker.longitude)}
                        >
                            <Image source={require('../assets/patient.png')} style={{height: 40, width:40 }} />

                        </Marker>

                    ))}
                </MapView>
                <View style = {{top: 400, alignItems: 'center', justifyContent: 'center'}}>
                {directionsbutton}
                {cancelbutton}
                </View>
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
    goToPatientButton: {
        backgroundColor: "black",
        marginTop: "auto",
        margin: 30,
        top: 84,
        left: -70,
        padding: 15,
        zIndex: 10,
        elevation: 10,
        paddingLeft: 30,
        paddingRight: 30,
        alignSelf: "center",
        alignItems: 'center',
        textAlign: "center",
        justifyContent: 'center',
        borderRadius: 3,
        shadowRadius: 5,
        shadowOpacity: 1

    },
    cancelButton: {
        backgroundColor: "maroon",
        marginTop: "auto",
        margin: 30,
        padding: 15,
        zIndex: 10,
        top: 0,
        left: 100,
        elevation: 10,
        paddingLeft: 30,
        paddingRight: 30,
        alignSelf: "center",
        alignItems: 'center',
        textAlign: "center",
        justifyContent: 'center',
        borderRadius: 3,
        shadowRadius: 5,
        shadowOpacity: 1
    },
    bottomButtonText: {
        fontSize: 20,
        color: "white",
        fontWeight: "600",
        textAlign: 'center',
        elevation: 11,
        zIndex: 11
    },
});



