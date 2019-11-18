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
     TouchableWithoutFeedback,
     ActivityIndicator
 } from 'react-native';
 import { StackNavigator } from 'react-navigation-stack';
 import * as firebase from 'firebase';


 export default class Login extends Component {

    static navigationOptions = {
        header: null,
        headerStyle: {backgroundColor: '00a8ff'},
    };

    // constructor(props) {
    //     super(props);
    //     this.state
        state = {
            email: '',
            password: '',
            errorMessage: null,
            loading: false
        }
    
    componentDidUpdate() {
        setTimeout(() => this.setState({errorMessage: ''}), 20000);
        
    }

    onLoginPress = (event) => {

        event.preventDefault();
        if (this.state.email == "" || this.state.password == "") {
            alert("Please enter your login details");
            return;
        }
 
        this.setState({ loading: true });
        const{email, password} = this.state;
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('Home'))
        .then(() => this.setState({ email: ''}))
        .then(() => this.setState({ password: '' }))
        .catch(error => this.setState({ errorMessage: error.message, loading: false}))
        console.log("Loading Status: " + this.state.loading)
        
    }

     
        render() {
            let loading = null;
            if (this.state.loading) {
                loading = <ActivityIndicator 
                size = "large"
                animating = {this.state.beginJob}
                />
            }
            return (
                <KeyboardAvoidingView behavior = 'padding' enabled style = {styles.wrapper}>
                    
                    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
                    
                    <View style = {styles.container}>

                        <Text style = {styles.topText}> FastAID is an app for medical professionals and patients. </Text>

                        <Text style = {styles.header}>- FastAID -</Text>

                        <TextInput 
                        style = {styles.textInput} 
                        placeholder = 'E-mail'
                        autoCapitalize = "none"
                        onChangeText={ (email) => this.setState({email}) }
                        value = {this.state.email}
                        onPress={Keyboard.dismiss}
                        underlineColorAndroid='transparent' 
                        returnKeyType = "next"
                        
                        />

                        <TextInput 
                        style={styles.textInput} 
                        placeholder='Password'
                        autoCapitalize = "none"
                        onChangeText={(password) => this.setState({ password })}
                        value = {this.state.password}
                        onPress={Keyboard.dismiss}
                        secureTextEntry={true}
                        returnKeyType = "done"
                        underlineColorAndroid='transparent'
                            
                        />

                        <View style = {{flexDirection: 'column'}}>
                        <TouchableOpacity 
                        style = {styles.button}
                        onPress={this.onLoginPress}>
                        
                        <Text style = {{fontWeight: 'bold', color: 'white'}}> Log In </Text>
                        </TouchableOpacity>

                        <Text style = {{ color: 'red', textAlign: 'center', alignItems: 'center', justifyContent: 'center', top: 10 }}> {this.state.errorMessage} </Text>

                        <Text style = {{color: 'white', alignItems: 'center', fontSize: 18, textAlign: 'center', top: 65}}
                        
                        > Don't have an account? Create one now! </Text>

                        <TouchableOpacity
                            style={styles.signupButton}
                            onPress={() => this.props.navigation.navigate('Signup')}>
                            <Text style = {{fontWeight: 'bold', color: 'white'}}> Sign Up </Text>
                        </TouchableOpacity>
                        </View>
                        

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
        top: -130,
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
        borderRadius: 5,
        fontWeight: 60,
        width: 335
    },
    signupButton: {
        alignSelf: 'stretch',
        backgroundColor: '#0059b3',
        padding: 20,
        alignItems: 'center',
        borderRadius: 5,
        fontWeight: 60,
        top: 75
    }
});
            