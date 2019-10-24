import React, { Component } from "react";
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    Keyboard,
    TouchableOpacity,
    Button,
    ActivityIndicator,
    Switch,
    ScrollView,
    Platform,
    SafeAreaView
} from "react-native";

export default class OnTheDay extends Component {
    static navigationOptions = {
        headerTransparent: true,
        headerStyle: { borderBottomWidth: 0 }
    }; 
    constructor() {
        super();
        this.state = ({
            cancer: true,
            bloodPressure: "",
            glucose: true
        });
    }

    handleSetState = state => event => {
        this.setState({
            [state]: !this.state[state]
        })
    };

    goToResults = () => {
        if (this.state.bloodPressure == "") {
            alert("Please enter a numeric value for blood pressure levels");
        } else {
            this.props.navigation.navigate('Result', {
                cancer: this.state.cancer,
                bloodPressure: this.state.bloodPressure,
                glucose: this.state.glucose
            })
        }
    }

    render() {
        
    }
}