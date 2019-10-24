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
     AsyncStorage
 } from 'react-native';

 export default class Login extends Component {
     static navigationOptions = {
         headerStyle: {backgroundcolor: '00a8ff'},
     }; 
     constructor(props) {
         super(props);
         this.state = {username: "", 
         password: ""
        }
     }

     handleSubmit = (event) => {
         event.preventDefault(); 
            const userName = this.state.username;
            const passWord = this.state.password;

            if (userName == '' || passWord == '') {
                alert('Incorrect Username and/or Password');
                return;
            }

            fetch('', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify({
                    user_name: userName,
                    user_password : passWord
                })
            }).then(async (result) => {
                let jsonRes = await result.json();
                    console.log(jsonRes);

                    if (!jsonRes.token) {
                        alert('Username or password is invalid!')
                        return;
                    }

                    await AsyncStorage.setItem('token', jsonRes.token);
                    await AsyncStorage.setItem('userId', jsonRes._id);
                    this.props.navigation.navigate('Home');
            }).catch(error => {
                console.log(error);
            });

            this.setState({
                username: '',
                password: '',
            })
        }

        render() {
            <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
                <View style = {styles.container}>
                    <View>
                        <Image />
                    </View>
                    <Text style = {styles.heading}> Perioperative Glucose Management </Text>

                    <Text style = {styles.text}> Username </Text>
                    <TextInput style = {styles.input} 
                    placeholder = "Username"
                    onChangeText = {text => this.setState({username: text})}
                    value = {this.state.username}
                    returnKeyType = "next"
                    onSubmitEditing = {() => this.passwordInput.focus()}
                    />

                    <Text style = {styles.text}> Password </Text>
                    <TextInput style = {styles.input} 
                    placeholder = "Password"
                    onchangeText = {text => this.setState({password: text})}
                    value = {this.state.password}
                    secureTextEntry
                    returnKeyType = "done"
                    ref = {(input) => this.passwordInput = input}
                    />

                    <TouchableOpacity style = {styles.buttonContainer} onPress = {this.handleSubmit}>
                        <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
                            <View style = {{marginTop: 5, marginRight: 5}}>
                                <Icon name = "sign-in" size = {25} color = "white" />
                            </View>
                            <Button color = "white" onPress = {this.handleSubmit} title = "LOGIN" />
                        </View>
                    </TouchableOpacity>

                    
                        <Button onPress = {() => this.props.navigation.navigate('SignUp')}
                        color = 'white'
                        title = "Sign up" />
                </View>

            </KeyboardAvoidingView>
            
        }
 }

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
         backgroundColor: '#000d1a'
    }, 
    input: {
        height: 40,
        fontSize: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        marginBottom: 10,
        padding: 10
    }, 
    buttonContainer: {
        backgroundColor: 'green',
        marginTop: 20,
        marginBottom: 20
    }, 
    text: {
        fontWeight: '400',
        fontSize: 20,
        marginBottom: 10
    }, 
    account: {
        color: 'white',
        textAlign: 'center',
        padding: 20, 
        fontWeight: '400', 
        fontSize: 20,
        textDecorationLine: 'underline'
    }, 
    heading: {
        fontWeight: '800',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 120,
        marginBottom: 30,
        color: 'white'
    }
 });