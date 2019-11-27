import React, { Component } from 'react'; 
import { View, Text, TouchableOpacity, StyleSheet, TouchableHighlight, ScrollView, AppDrawerNavigator, ImageBackground } from 'react-native'; 
import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';
import MenuButton from '../components/MenuButton';
import MapView from 'react-native-maps';
import { Button, Container, Header, Content, Left } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as firebase from 'firebase';

export default class Home extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
        
        headerTransparent: false,
        headerTitle: 'Home',
        navigationOptions: {
            headerVisible: true,
        },
        headerStyle: { borderBottomWidth: 0 },
        headerLeft: null
    }
};

    state = { currentUser: null, loading: true }
    
    signOutUser = () => 
       { 
        this.props.navigation.navigate('Login');
        console.log('Signed out');
    }

    render() {
        const { currentUser } = this.state 

        return (
            <Container>
                
            <ScrollView style = {styles.screen}>
            <View style = {styles.screen}>
                    
                        <ImageBackground
                            source={require('../assets/doctor2.jpg')}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 7,
                                top: 60,
                                opacity: '1',
                                
                                
                            }}
                        >  
                    
                
                {/* <Text style = {styles.title}> Select options. </Text> */}
                            <Text style={{
                                alignItems: 'center', fontSize: 18, textAlign: 'center', color: 'white', justifyContent: 'center', top: 5, textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 10, }} > Welcome to FastAID! </Text>
                
            <View style = {{flex: 1}}>
                <Text style = {{
                        alignItems: 'center',
                        fontWeight: "bold",
                        fontSize: 42,
                        textAlign: 'center',
                        color: 'white',
                        justifyContent: 'center',
                        top: 220, 
                        textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowOffset: { width: -1, height: 1 },
                        textShadowRadius: 10,
                }}> Select services </Text>
                </View>
                {/* <Text style = {{
                        alignItems: 'center',
                        fontWeight: "bold",
                        fontSize: 54,
                        textAlign: 'center',
                        color: 'white',
                        justifyContent: 'center',
                        top: 100
                }}> Analysis </Text> */}

                <View style = {{flexDirection: 'row', marginTop: 10, top: 230}}>
                    <TouchableOpacity
                        style={{ alignItems: 'center', backgroundColor: '#0059b3', padding: 15, borderRadius: 7, borderColor: 'white', borderWidth: 1, width: '50%', justifyContent: 'center', top: 0 }}
                        onPress={() => this.props.navigation.navigate('Booking')}
                    >
                            <View style={{ marginTop: 0, top: -5 }}>
                                <Icon name="medkit" size={25} color="white" />
                            </View>
                        <Text style={styles.buttonText}> Attend Requests </Text>
                    </TouchableOpacity>
                   
                <TouchableOpacity
                    style = {styles.button} 
                    onPress={() => this.props.navigation.navigate('PerioperativeOptions')}
                    >
                            <View style={{ marginTop: 0, top: -5 }}>
                                <Icon name="stethoscope" size={25} color="white" />
                            </View>
                    <Text style = {styles.buttonText}> Perioperative Assessment for Diabetics </Text>
                </TouchableOpacity>
                </View>

                <View style = {{flex: 1, flexDirection: 'row', marginTop: 10, top: 230}}>
                        <TouchableOpacity
                            style={{ alignItems: 'center', backgroundColor: '#0059b3', padding: 15, borderRadius: 7, borderColor: 'white', borderWidth: 1, width: '50%', justifyContent: 'center', top: 0 }}
                            onPress={() => this.props.navigation.navigate('DiabetesCharts')}
                        >
                            <View style={{ marginTop: 0, top: -5 }}>
                                <Icon name="line-chart" size={25} color="white" />
                            </View>
                            <Text style={styles.buttonText}> Other Features </Text>
                        </TouchableOpacity>
                
                 
                    
        
                    <TouchableOpacity
                                style={{ alignItems: 'center', backgroundColor: '#0059b3', padding: 15, borderRadius: 7, borderColor: 'white', borderWidth: 1, width: '50%', justifyContent: 'center', top: 0, marginLeft: 10}}
                        onPress={() => this.props.navigation.navigate('Settings')}
                    >
                            <View style={{ marginTop: 0, top: -5 }}>
                                <Icon name="gear" size={25} color="white" />
                            </View>
                        <Text style={styles.buttonText}> Settings </Text>
                    </TouchableOpacity>

                </View>  
                </ImageBackground>
            </View>
            </ScrollView>
            </Container>
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
        top: 0
        
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
        borderColor: 'white',
        borderWidth: 1,
        width: '50%',
        justifyContent: 'center',
        top: 0,
        marginLeft: 10

    }, 
    button2: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0059b3',
        padding: 15,
        borderRadius: 7,
        borderColor: 'white',
        borderWidth: 1,
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
        top: 0
    }, 
    subtitle: {
        alignItems: 'center', 
        fontWeight: "40",
        fontSize: 12, 
        textAlign: 'center', 
        color: 'white', 
        justifyContent: 'center',
        top: 0
    
    }
});