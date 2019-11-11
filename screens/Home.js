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
                
                <Text style = {styles.title}> Select options. </Text>
                <Text style = {{alignItems: 'center', fontSize: 18, textAlign: 'center', color: 'white', justifyContent: 'center', top: -120}} > Welcome to FastAid! Below you can select the options either as a patient or a doctor. </Text>
                

                <Text style = {{
                        alignItems: 'center',
                        fontWeight: "bold",
                        fontSize: 54,
                        textAlign: 'center',
                        color: 'white',
                        justifyContent: 'center',
                        top: -90
                }}> Patients </Text>
                <Text style = {{
                        alignItems: 'center',
                        fontWeight: "bold",
                        fontSize: 54,
                        textAlign: 'center',
                        color: 'white',
                        justifyContent: 'center',
                        top: 100
                }}> Doctors </Text>

                    <TouchableOpacity
                        style={{ alignItems: 'center', backgroundColor: '#0059b3', padding: 15, borderRadius: 7, borderColor: 'black', width: '65%', justifyContent: 'center', top: -150 }}
                        onPress={() => this.props.navigation.navigate('Booking')}
                    >
                        <Text style={styles.buttonText}> Request Doctor </Text>
                    </TouchableOpacity>
                   
                <TouchableOpacity
                    style = {styles.button} 
                    onPress={() => this.props.navigation.navigate('Preoperative')}
                    >
                    <Text style = {styles.buttonText}> Preoperative Clinic </Text>
                </TouchableOpacity>
                    <Text style={{ alignItems: 'center', fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: 'white', justifyContent: 'center', top: 290 }} > © 2019 </Text>
        
                    <TouchableOpacity
                        style={{ alignItems: 'center', backgroundColor: 'maroon', padding: 15, borderRadius: 7, borderColor: 'black', width: '35%', justifyContent: 'center', top: 300}}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text style={styles.buttonText}> Sign Out </Text>
                    </TouchableOpacity>
        
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
        alignItems: 'center',
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
        top: 55

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
        fontSize: 12,
        textAlign: 'center',
        color: 'white',
        justifyContent: 'center',
        marginVertical: 90,
        top: 40
    }, 
    subtitle: {
        alignItems: 'center', 
        fontWeight: "40",
        fontSize: 12, 
        textAlign: 'center', 
        color: 'white', 
        justifyContent: 'center',
        top: -110
    
    }
});