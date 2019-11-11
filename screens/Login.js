/**
 * Login class used for login to the system. 
 * Doctors, nurses and medical students can register.
 * Users will need a valid username and password to sign in
 */

 import React, { Component } from 'react';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import {
     StyleSheet,
     View,
     Text,
     Image,
     Button,
     KeyboardAvoidingView,
     TextInput,
     ScrollView,
     TouchableOpacity,
     AsyncStorage,
     Keyboard,
     TouchableWithoutFeedback
 } from 'react-native';
 import { StackNavigator } from 'react-navigation-stack';
import * as firebase from 'firebase';

 export default class Login extends Component {

    static navigationOptions = {
        headerStyle: {backgroundColor: '00a8ff'},
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            error: '',
            loading: false,
        }
    }

    onLoginPress() {
        this.state({error: '', loading: true});

        const{email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            this.state({error:'', loading: false});
            this.props.navigation.navigate('Home');
        }).catch(() =>  {
            this.state({error: 'Authentication failed', loading: false});
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;

        if (username == '' || password == '') {
            alert("Incorrect Username and/or Password. Please try again");
            return;
        }

        fetch('http://192.168.0.39:3000/users', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({
                user_name: username,
                user_password: password
            })
        }).then(async (result) => {
            let jsonRes = await result.json();
            console.log(jsonRes);

            

            if (!jsonRes.token) {
                alert('Username or password is invalid');
                return;
            }
            await AsyncStorage.setItem('token', jsonRes.token);
            await AsyncStorage.setItem('user', jsonRes.username);
            this.props.navigation.navigate('Home');
        }).catch(error => {
            console.log(error);
        });

        this.setState({
            username: '',
            password: '',
        })
    }

    renderButtonOrLoading() {
        if (this.state.loading) {
            return <Text> Loading </Text>
        }
    }
     
        render() {
            return (
                <KeyboardAvoidingView behavior = 'padding' style = {styles.wrapper}>
                    
                    <TouchableWithoutFeedback>
                    <View style = {styles.container}>

                        <Text style = {styles.topText}> This is an app for medical professionals and patients. </Text>

                        <Text style = {styles.header}>- FastAID -</Text>

                        <TextInput style = {styles.textInput} placeholder = 'Username / E-mail'
                        onChangeText={ (email) => this.state({email}) }
                        onPress={Keyboard.dismiss}
                        underlineColorAndroid='transparent' 
                        returnKeyType = "next"
                        
                        />

                        <TextInput style={styles.textInput} placeholder='Password'
                            onChangeText={(password) => this.state({ password })}
                            onPress={Keyboard.dismiss}
                            secureTextEntry={true}
                            returnKeyType = "done"
                            underlineColorAndroid='transparent'
                            
                        />

                        <View style = {{flexDirection: 'column'}}>
                        <TouchableOpacity 
                        style = {styles.button}
                        onPress={this.onLoginPress} {...Keyboard.dismiss}>
                        
                        <Text style = {{fontWeight: 'bold', color: 'white'}}> Log In </Text>
                        </TouchableOpacity>

                        <Text style = {{color: 'white', alignItems: 'center', fontSize: 18, textAlign: 'center', top: 65}}
                        
                        > Don't have an account? Create one now! </Text>

                        <TouchableOpacity
                            style={styles.signupButton}
                            onPress={() => this.props.navigation.navigate('Signup')}>
                            <Text style = {{fontWeight: 'bold', color: 'white'}}> Sign Up </Text>
                        </TouchableOpacity>
                        </View>
                        {this.renderButtonOrLoading()}

                    </View>
                    </TouchableWithoutFeedback>
                    
                </KeyboardAvoidingView>
            );
        }
    }

// #01c853
const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }, 
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000d1a',
        paddingLeft: 40,
        paddingRight: 40
    }, 
    topText: {
        color: '#fff',
        textAlign: 'center',
        top: -150,
        fontWeight: '40'
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold',
        top: 40
    }, 
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    button: {
        alignSelf: 'stretch',
        backgroundColor: '#0059b3', 
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        fontWeight: 60,
        width: 335
    },
    signupButton: {
        alignSelf: 'stretch',
        backgroundColor: '#0059b3',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        fontWeight: 60,
        top: 75
    }
});
            