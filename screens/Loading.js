import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import * as firebase from 'firebase';

export default class Loading extends Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Home' : 'Signup')
        })
    }
    
    render() {
        return (
            <ScrollView style = {styles.container}>
            <View style = {styles.container}>
                <View style = {{flex: 1, backgroundColor: '#000d1a'}}>
                <Text style = {{color: '#fff', fontSize: 40, fontWeight: 'bold', alignItems: 'center', textAlign: 'center', marginTop: 0, top: -20}}> Loading </Text>
                <ActivityIndicator 
                style = {{ alignItems: 'center', marginTop: 0}}
                color = '#fff'
                size = "large"
                />
                </View>
            </View>
            </ScrollView>
        );
    }
}
// '#e93766'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000d1a',
        color: '#000d1a',
        
    }
});