import React, { Component } from 'react'; 
import { View, Text, TouchableOpacity, StyleSheet, TouchableHighlight, ScrollView } from 'react-native'; 
import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';

export default class Home extends React.Component {
    static navigationOptions = {
        headerTransparent: true, 
        headerStyle: { borderBottomWidth: 0 } 
    };
    render() {
        return (
            
            <ScrollView style = {styles.screen}>
            <View style = {styles.screen}>
                <Text style = {styles.title}> Perioperative Assessment In Diabetics </Text>
                <Text style = {{alignItems: 'center', fontSize: 14, textAlign: 'center', color: 'white', justifyContent: 'center', top: -160}} > You can choose to generate glucose estimates using the ML model or attend to patient requests. </Text>
                <Text style = {styles.subtitle}> Select options. </Text>
                <TouchableOpacity
                    style = {styles.button} 
                    onPress={() => this.props.navigation.navigate('Preoperative')}
                    >
                    <Text style = {styles.buttonText}> Preoperative Clinic </Text>
                </TouchableOpacity>
                    <Text style={{ alignItems: 'center', fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: 'white', justifyContent: 'center', top: 430 }} > © 2019 </Text>
        
        
            </View>
            </ScrollView>
            
        );
    }
}

// #E0FFFF

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        backgroundColor: '#000d1a',
        alignItems: 'center'
    },
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        alignItems: 'center', 
        justifyContent: 'center'
    }, 
    bodytext: {
        fontSize: 20
    }, 
    choiceText: {
        fontSize: 20, 
        fontWeight: "200", 
        color: "black",
    }, 
    button: {
        
        alignItems: 'center', 
        backgroundColor: '#0059b3', 
        padding: 15, 
        borderRadius: 7, 
        borderColor: 'black',
        width: '65%',
        justifyContent: 'center',
        top: 120

    }, 
    button2: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0059b3',
        padding: 15,
        borderRadius: 7,
        width: '65%',
        justifyContent: 'center',
        top: 130
        
    },
    buttonText: {
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 18,
        textAlign: 'center',
        alignItems: 'space-between'
    }, 
    title: {
        alignItems: 'center', 
        fontWeight: "580", 
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        justifyContent: 'center',
        marginVertical: 90,
        top: 225
    }, 
    subtitle: {
        alignItems: 'center', 
        fontWeight: "40",
        fontSize: 12, 
        textAlign: 'center', 
        color: 'white', 
        justifyContent: 'center',
        top: 107
    
    }
});