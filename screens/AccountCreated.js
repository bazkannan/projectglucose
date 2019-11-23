import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import Login from '../screens/Login';
import * as firebase from 'firebase';

export default class AccountCreated extends Component {

    static navigationOptions = ({ navigation }) => {
        return {

            header: null,
            navigationOptions: {
                headerVisible: false,
            },
        }
    };

    state = { currentUser: null }

    render() {
        const { currentUser } = this.state 
        return (
            
            <View style = {styles.container}>
                <Text style={{
                    fontWeight: '400',
                    fontSize: 20,
                    color: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: 10}}> Hello {currentUser}! </Text>
                <Text style = {styles.text}> Your account has successfully been created! </Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.props.navigation.navigate('Login')}>
                    <Button onPress={this.props.navigation.navigate('Login')} color='white' title="Login" />
                </TouchableOpacity>
            </View>
           
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000d1a',
        padding: 30
    },
    input: {
        height: 40,
        fontSize: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        marginBottom: 20,
        padding: 8,
        borderRadius: 5,
    },
    buttonContainer: {
        backgroundColor: '#0059b3',
        borderRadius: 10,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        top: 20,
        left: 100
    },
    text: {
        fontWeight: '400',
        fontSize: 20,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    account: {
        color: 'white',
        textAlign: 'center',
        padding: 20,
        fontWeight: '400',
        fontSize: 20,
        textDecorationLine: 'underline'
    },
    heading: {
        fontWeight: '800',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 35,
        marginBottom: 30,
        color: 'white'
    }
})