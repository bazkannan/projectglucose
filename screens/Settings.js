import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, AsyncStorage, ScrollView, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as firebase from 'firebase';

export default class Settings extends Component {

    static navigationOptions = {
        title: 'Settings',
        headerTitle: 'Settings',
        headerStyle: { backgroundColor: '#179bbd' },
        headerTitleStyle: { color: 'white' },
        headerLeft: null
    }

    logout = () => {
    
        Alert.alert(
            'Alert',
            'Are you sure you want to log out?',
            [
                {
                text: 'Yes', 
                onPress: () => AsyncStorage.clear()
                
                .then(() => this.props.navigation.navigate('Login'))
                .then(console.log('Signed out')),
                style: 'cancel'
                },
                {
                text: 'No',
                onPress: () => { return null },
                
                },
            ],
            {cancelable: false},
        );
    }
    
    
    render() {
        return (
            <ScrollView style = {styles.container}>
            <View style={styles.container}>
            <View style = {{flex: 1, marginTop: 50}}>
            <TouchableOpacity onPress = {() => this.props.navigation.navigate('Home')}>
                <View style={styles.border}>
                    <Text style={styles.textStyle}> <Icon name="home" size={25} /> Home  </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => this.props.navigation.navigate('About')}>
                <View style={styles.border}>
                    <Text style={styles.textStyle}> <Icon name="question-circle" size={25} /> About </Text>
                </View>
            </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => { this.logout() }}>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <View style={{ marginTop: 5 }}>
                            <Icon name="sign-out" size={25} color="white" />
                        </View>
                        <Button onPress={() => { this.logout() }} color='white' title="SIGN OUT" />
                    </View>
                </TouchableOpacity>
            </View>
            </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
});