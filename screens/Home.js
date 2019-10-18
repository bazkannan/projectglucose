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
            
            <ScrollView>
            <View style = {styles.screen}>
                <Text style = {styles.title}> Perioperative Assessment In Diabetics </Text>
                <Text style = {styles.subtitle}> Select as appropriate. </Text>
                <TouchableOpacity
                    style = {styles.button} 
                    onPress={() => this.props.navigation.navigate('Preoperative')}
                    >
                    <Text style = {styles.buttonText}> Preoperative Clinic </Text>
                </TouchableOpacity>
        
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={() => this.props.navigation.navigate('OnTheDay')}
                    >
                        <Text style={styles.buttonText}> On The Day Clinic </Text>
                    </TouchableOpacity>
                
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
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
        backgroundColor: '#349beb', 
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
        backgroundColor: '#349beb',
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
        fontWeight: 'bold', 
        fontStyle: 'italic',
        fontSize: 24,
        textAlign: 'center',
        color: 'red',
        justifyContent: 'center',
        top: 30,
        marginVertical: 100
    }, 
    subtitle: {
        alignItems: 'center', 
        fontWeight: "40",
        fontSize: 14, 
        textAlign: 'center', 
        color: 'black', 
        justifyContent: 'center',
        top: 100
    
    }
});