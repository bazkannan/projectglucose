import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

const WIDTH = Dimensions.get('window').width; 
const HEIGHT = Dimensions.get('window').height;

export const CurrentLocationButton = function(props) {
    
    const cb = props.cb ? props.cb : () => console.log('Callback function not passed to CurrentLocationButton!');
    
    const bottom = props.bottom ? props.bottom : 65;
    
    return (
        <View style = {[styles.container, {top: HEIGHT-bottom}]}>
            
            <MaterialIcons
            name = "my-location"
            color = "#000000"
            size = {25}
            onPress = {() => { cb() }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        zIndex: 9,
        position: 'absolute',
        width: 45,
        height: 45,
        backgroundColor: '#fff',
        right: 30,
        bottom: 40,
        borderRadius: 50,
        shadowColor: '#000000',
        elevation: 5,
        shadowRadius: 5,
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 0 },
        justifyContent: 'space-around',
        alignItems: 'center', 

    },
    
});