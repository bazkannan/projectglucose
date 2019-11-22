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
     ActivityIndicator,
     ImageBackground
 } from 'react-native';
 import { StackNavigator } from 'react-navigation-stack';
 import * as firebase from 'firebase';


 export default class Login extends Component {

    static navigationOptions = {
        header: null,
        
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
        console.log('Logged in');
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
                            <ImageBackground
                                source={require('../assets/doctor.jpg')}
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 40,
                                    opacity: '1',
                                    }}
                           >   
                        <Text style = {styles.topText}> FastAID is an app for medical professionals. </Text>

                        <Text style = {styles.header}>- Doctors Login -</Text>

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

                                <TouchableOpacity>
                                    <Text
                                    style={{ color: 'white', alignItems: 'center', fontSize: 10, textAlign: 'right', top: -10 }}

                                    > Forgot Password? </Text>
                                </TouchableOpacity>

                        <TouchableOpacity 
                        style = {styles.button}
                        onPress={this.onLoginPress}>
                                    <View style={{ marginTop: 0, top: -5 }}>
                                        <Icon name="sign-in" size={25} color="white" />
                                    </View>
                        <Text style = {{fontWeight: 'bold', color: 'white'}}> Log In </Text>
                        </TouchableOpacity>

                        <Text style = {{ color: 'red', textAlign: 'center', alignItems: 'center', justifyContent: 'center', top: 10 }}> {this.state.errorMessage} </Text>
                            
                        
                                    <Text style={{ color: 'white', alignItems: 'center', fontSize: 18, fontWeight: '60', textAlign: 'center', top: 20, textShadowRadius: 10,}}
                        
                        > Don't have an account? Create one now! </Text>
                        
                        
                        <TouchableOpacity
                            style={styles.signupButton}
                            onPress={() => this.props.navigation.navigate('Signup')}>
                                <View>
                                        <Icon name="user" style = {{margin: 5, top: -5}} size={25} color="white" />
                                </View>
                            <Text style = {{fontWeight: 'bold', color: 'white'}}> Sign Up </Text>
                        </TouchableOpacity>
                        
                        </View>
                        
                            <Text style={{ alignItems: 'center', fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: 'white', justifyContent: 'center', top: 20, opacity: 0.1, marginBottom: 30 }} > © FastAID 2019 </Text>
                            </ImageBackground>
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
        top: 10,
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
        justifyContent: 'space-around',
        textShadowRadius: 10,
        shadowRadius: 10,
        shadowColor: 'black',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        

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
        borderRadius: 5,
        shadowRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.75)'
    },
    button: {
        alignSelf: 'stretch',
        backgroundColor: '#006700', 
        padding: 20,
        alignItems: 'center',
        borderRadius: 5,
        fontWeight: 60,
        width: 335,
        shadowRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.75)'
    },
    signupButton: {
        alignSelf: 'stretch',
        backgroundColor: '#0059b3',
        padding: 20,
        alignItems: 'center',
        borderRadius: 5,
        fontWeight: 60,
        top: 5,
        shadowRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.75)'
    }
});
            