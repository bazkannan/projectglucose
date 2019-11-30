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
            // pid: null,
            // error: "",
            // latitude: null,
            // longitude: null,
            // destination: "",
            // patientDestination: "",
            // predictions: [],
            // pointCoords: [],
            // lookingForPatients: false,
            // patientInProgress: false,
            // clearRoute: false,
            // cost: null,
            // distance: null,
            // patientUID: null,
            // patientName: '',
            // patientSocket: '',
            // rating: '',
            // endpoint: '',
            // serviceType: '',
            // patientLocation: '',
            // patientServiceMultiplier: 1
        };
    //     this.onChangeDestinationDebounced = _.debounce(
    //         this.onChangeDestinationDebounced, 1000
    //     );
    //     this.findPatient = this.findPatient.bind(this);
    //     this.acceptPatientRequest = this.acceptPatientRequest.bind(this);
    //     this.doctorArrived = this.doctorArrived.bind(this);
    //     this.beginTreatment = this.beginTreatment.bind(this);
    //     this.endTreatment = this.endTreatment.bind(this);
    //     this.cancelTreatment = this.cancelTreatment.bind(this);
    //     this.socket = null;
    //     this.directionsToPatient = this.directionsToPatient.bind(this);
    //     this.directionsToDestination = this.directionsToDestination.bind(this);
    //     this._getLocationAsync();
    // }

    // async componentDidMount() {
    //     let { status } = await Permissions.askAsync(Permissions.LOCATION);
    //     if (status !== 'granted') {
    //         this.setState({
    //             errorMessage: 'Permission to access location was denied',
    //         });
    //     }
    //     await AsyncStorage.getItem("userData", (error, result) => {
    //         if (!error) {
    //             if (result !== null) {
    //                 this.setState({pid: JSON.parse(result)});
    //                 console.log("Success " + this.state.pid)
    //             }
    //         }
    //     })

    //     this.watchId = navigator.geolocation.watchPosition(
    //         position => {
    //             this.setState({
    //                 latitude: position.coords.latitude,
    //                 longitude: position.coords.longitude
    //             });
    //         },
    //         error => console.log(error), { enableHighAccuracy: true, maximumAge: 100, timeout: 20000 }
    //     );
    //     this.getStars();
    // }

    // componentWillUnmount() {
    //     navigator.geolocation.clearWatch(this.watchId);
    // }

    // async getRouteDirections (destinationPlaceId, destinationName) {
    //     try {
    //         const response = await fetch();
    //         const json = await response.json();
    //         console.log("Mapped route direction for courier");
    //         const points = PolyLine.decode(json.routes[0].overview_polyline.points);
    //         const pointCoords = points.map (pont => {
    //             return { latitude: point [0], longitude: point [1] };
    //         });
    //         this.setState({
    //             pointCoords,
    //             predictions: [], 
    //             destination: destinationName
    //         });
    //         Keyboard.dismiss();
    //         this.map.fitToCoordinates(pointCoords);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // getStars = async () => {
    //     try {
    //         const stars = await axios.get('', { method: 'GET' })
    //         this.setState({ rating: stars.data[0].rating_score });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // findPatient() {
    //     if (!this.state.lookingForPatients) {
    //         this.centerMap();
    //         this.setState({ lookingForPatients: true });

    //         console.log("Patient search status: " + this.state.lookingForPatients);
    //         this.socket = socketIO.connect("http://192.168.0.39:3000");

    //         this.socket.on("connect", () => {
    //             this.socket.emit("pid", { uid: this.state.uid });
    //             this.socket.emit("findPatient", { lat: this.state.latitude, lng: this.state.longitude, rating: this.state.rating });
    //         });

    //         this.socket.on("notifyDriver", courierMessage => {
    //             console.log("Doctor got patient request");
    //             console.log("The patient latitude is " + doctorMessage.patientLat) 

    //         })
    //     }
    // }

//     _getLocationAsync = async () => {
//         let { status } = await Permissions.askAsync(Permissions.LOCATION);
//         if (status !== 'granted') 
//             console.log("Permission to access location was denied");
        
//         let location = await Location.getCurrentPositionAsync({enabledHighAccuracy: true})
//         let region = {
//             latitude: location.coords.latitude,
//             longitude: location.coords.longitude,
//             latitudeDelta: 0.045,
//             longitudeDelta: 0.045,
//         }

//         this.setState({region: region});
//     }
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



