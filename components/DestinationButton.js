import React, { Component, AppRegistry } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import IonIcons from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';


const WIDTH = Dimensions.get('window').width;

export const DestinationButton = function(props) {
    const cb = props.cb ? props.cb : console.log('Cb function not working for getDestinationButton()')
    return(
        <TouchableOpacity
        onPress={() => { cb() }}
        style = {styles.containerbutton}
        >
            <View style = {styles.leftCol}>
                {/* <Text style = {{fontSize: 8}}>{'\u25A0'}</Text> */}
                <Icon name = "search" color = "#000000" size = {25} />
            </View>

            <View style = {styles.centerCol}>
                <Text style = {{fontFamily: 'sans-serif-thin', fontSize: 18, color: '#545454'}}>
                    Tap to search for patients
                </Text>
            </View>

            <View style = {styles.rightCol}>
                 {/* <IonIcons name = "md-car" color = "#000000" size = {25} style = {{alignSelf: 'center'}} />  */}
                 <Icon name = "medkit" color = "#000000" size = {25} style = {{alignSelf: 'center'}}/>
            </View>
        </TouchableOpacity>
        );
    }


const styles = StyleSheet.create({
    containerbutton: {
        zIndex: 9,
        position: 'absolute',
        flexDirection: 'row',
        width: (WIDTH-40),
        height: 60,
        top: 110,
        left: 20,
        borderRadius: 5,
        backgroundColor: 'white',
        alignItems: 'center',
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

export default DestinationButton;
