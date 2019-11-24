import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class About extends Component {
    render() {
        return (
            <ScrollView style = {styles.container}>
            <View style = {styles.container}>
                <ImageBackground
                    source={require('../assets/bharath.jpeg')}
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 7,
                        width: 150,
                        height: 150,
                        top: 0,
                        left: -100,
                        opacity: '1',
                    }}
                >
                <View style = {{top: 0, left: 195}}>
                
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',  top: 0}}>
                        
                        <Icon name="github" size={40} color="white"/>
                        <Text style = {{ fontSize: 12, fontWeight: '500', marginLeft: 5, color: 'white', textAlign: 'center', justifyContent: 'center'}}> github.com/bazkannan </Text>
                        
                </View>
                        
                </View>
                    
                </ImageBackground>
                
            </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000d1a',
        padding: 10,

    },
    buttonContainer: {
        backgroundColor: 'maroon',
        marginTop: 100,
        marginBottom: 20,
        top: -80,
        borderRadius: 5
    },
    border: {
        marginTop: 15,
        marginLeft: 5,
        marginRight: 5,
        borderBottomWidth: 1,
        borderColor: 'white',
    },
    textStyle: {
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 5,
        marginBottom: 15,
        color: 'white'
    },
    
});