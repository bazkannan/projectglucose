import React, { Component } from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class About extends Component {


    render() {
        return (
            <ScrollView style = {styles.container}>
            <View style = {styles.container}>
                <View style = {styles.containerButton}>
                <View style = {styles.centerCol}>
                    <Text style = {{fontSize:  14, marginBottom: 5, fontWeight: 'bold', marginLeft: 3, textAlign: 'left', color: '#545454'}}> FastAID - Perioperative Glucose Management </Text>
                    <Text style = {{fontFamily: 'sans-serif-thin', fontSize: 12, marginLeft: 5, textAlign: 'left', color: '#545454'}}>
                        The current clinical guidelines relating to management of diabetes patients before their surgery is complex due to existence of a variety of medications for diabetes control as also the various types of surgical procedures which a given patient might undergo. The app intends to simply the process for the end user thus contributing to enhanced patient safety.
                    </Text>
                </View>
                </View>

                <View style = {styles.containerButton2}>
                    <View style = {styles.centerCol}>
                        {/*<Text style = {{fontSize:  18, marginBottom: 5, fontWeight: 'bold', marginLeft: 3, textAlign: 'left', color: '#545454'}}> Additional Information </Text>*/}
                        <Text style = {{fontFamily: 'sans-serif-thin', fontSize: 11, marginLeft: 5, textAlign: 'left', color: '#545454'}}>
                            Guidelines exist from professional medical societies in terms of the best approach in a given patient. These guidelines can be programmed as an internal flow chart which will then give an output in terms of specific instructions (e.g. medications to be continued, medications to be reduced and medications to be omitted, time when medications can be resumed after procedure). Currently, the myriad of diabetes medications means that it is challenging for a health professional to manually work out the path in the flow chart. This has potential for errors and suboptimal instructions. Discussion with medical experts have highlighted the need for an app which can simplify the process and make it safer. This app will make it easier for the end user to give the correct instructions.
                        </Text>
                    </View>
                </View>

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
    containerButton: {
        zIndex: 9,
        position: 'absolute',
        flexDirection: 'row',
        width: 350,
        height: 150,
        top: -160,
        left: -90,
        borderRadius: 2,
        backgroundColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        elevation: 7,
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },
    containerButton2: {
        zIndex: 9,
        position: 'absolute',
        flexDirection: 'row',
        width: 350,
        height: 200,
        top: 180,
        left: -90,
        borderRadius: 2,
        backgroundColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        elevation: 7,
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },
    leftCol: {
        flex: 1,
        alignItems: 'center',

    },
    centerCol: {
        flex: 4,

    },
    rightCol: {
        flex: 1,
        borderLeftWidth: 0,
        borderColor: '#ededed',
    },
    
});