import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TouchableHighlight, ScrollView, AppDrawerNavigator, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PerioperativeOptions extends Component {
    static navigationOptions = ({ navigation }) => {
        return {

            headerTransparent: false,
            headerTitle: 'Perioperative Assesment',
            navigationOptions: {
                headerVisible: true,
            },
            
        }
    };

    render() {
        return (
            <ScrollView style = {styles.screen}>
                
            <View style = {styles.screen}>
                    <ImageBackground
                        source={require('../assets/doctor3.jpg')}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 7,
                            top: 40,
                            opacity: '1',


                        }}
                    >  
            <View style = {{top: 230}}>
                        
                <Text style = {styles.title}> Perioperative Assessment for Diabetics </Text>
                    <View style = {{marginVertical: 10, top: -50}}>
                        <Text style={{
                            alignItems: 'center',
                            fontWeight: "bold",
                            fontSize: 18,
                            fontStyle: 'italic',
                            textAlign: 'center',
                            color: 'white',
                            justifyContent: 'center',
                            marginVertical: 10,
                            top: 65}}> Select type of assessment </Text>
                    </View>

                    <View style={{ flexDirection: 'row', padding: 10, paddingRight: 20, top: 0}}>
                        <TouchableOpacity
                            style={{ alignItems: 'center', backgroundColor: '#0059b3', padding: 15, borderRadius: 7, borderColor: 'white', borderWidth: 1, width: '50%', justifyContent: 'center', top: 0 }}
                            onPress={() => this.props.navigation.navigate('Preoperative')}
                        >
                            <View style={{ marginTop: 0, top: -5 }}>
                                <Icon name="heartbeat" size={25} color="white" />
                            </View>
                            <Text style={styles.buttonText}> Pre-Operative Clinic </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('OnTheDay')}
                        >
                            <View style={{ marginTop: 0, top: -5 }}>
                                <Icon name="stethoscope" size={25} color="white" />
                            </View>
                            <Text style={styles.buttonText}> On The Day Clinic </Text>
                        </TouchableOpacity>
                    </View>
            </View>
            </ImageBackground>
            </View>
            </ScrollView>
        );
    }
}

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
        borderColor: 'white',
        borderWidth: 1,
        width: '50%',
        justifyContent: 'center',
        top: 0,
        marginLeft: 10,
        marginRight: 10

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
        fontWeight: "bold",
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        justifyContent: 'center',
        marginVertical: 55,
        top: 85
    }
});