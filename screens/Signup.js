import React, { Component } from 'react'
import { 
    StyleSheet, 
    View, 
    Text, 
    Button, 
    KeyboardAvoidingView, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    ScrollView, 
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import * as firebase from 'firebase';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            firstName: "", 
            lastName: "",
            passWord: "", 
            reTypePassword: "",
            email: "",
            phone: ""
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('handle the sign up submit');

        if (this.state.passWord !== this.state.reTypePassword) {
            alert('Error. Passwords are not matching');
            return;
        }

        let data = {
            "Username": this.state.username,
            "FirstName": this.state.firstName, 
            "LastName": this.state.lastName, 
            "Password": this.state.passWord,
            "Email": this.state.email,
            "Phone": this.state.phone
        };

        fetch('http://192.168.0.39:3000/users', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(data)
        }).then (async (result) => {
            let jsonResponse = await result.json();

            if (jsonResponse.error) {
                alert('This username is already taken');
                return;
            }

            if (jsonResponse.emailError) {
                alert('Error. This email already exists')
                return;
            }

            if (jsonResponse.phoneError) {
                alert('Error. This phone number is already taken')
                return;
            }

            if (jsonResponse.success) {
                this.props.navigation.navigate('Login');
                return;
            } else {
                alert('Register unsuccessful. Please check your inputs');
                return;
            }
        }).catch(error => {
            console.log(error);
        });
    }

    static navigationOptions = {
        headerStyle: {backgroundColor: '#00a8ff'},
    };

    validation (text, type) {
        switch (type) {
            case "username" : {
                this.setState ({username: text})
            }
            case "firstName" : {
                this.setState ({firstName: text})
            }
            case "lastName" : {
                this.setState ({lastName: text})
            }
            case "passWord" : {
                this.setState ({passWord: text})
            }
            case "reTypePassword" : {
                this.setState ({reTypePassword: text})
            }
            case "Email" : {
                this.setState ({Email: text})
            }
            case "Phone" : {
                this.setState ({Phone: text})
            }
        }
    }

    onSignupPress() {
        this.setState({ error: '', loading: true });
        const { username, firstname, lastname, password, email, phone } = this.state;
        firebase.auth().createUserWithEmailAndPassword(username, firstname, lastname, password, email, phone)
            .then(() => {
                this.state({ error: '', loading: false });
                this.props.navigation.navigate('Home');
            })
            .catch(() => {
                this.state({ error: 'Authentication failed', loading: false });
            })

    }

    render() {
        return (
            <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
                <ScrollView>
                <TouchableWithoutFeedback>
                <View style = {styles.container}>
                    <StatusBar barStyle = 'default' />
                    
                        <Text style = {styles.heading}> Sign Up to FastAid! </Text>

                        <TextInput style = {styles.input} 
                        placeholder = "Username"
                        onChangeText = {(text) => this.validation(text, 'username')}
                        returnKeyType = "next"
                        onPress = {Keyboard.dismiss}
                        onSubmitEditing = {() => this.firstNameInput.focus()}
                        />

                        <TextInput style = {styles.input} placeholder = "First Name"
                        onChangeText = {(text) => this.validation(text, 'FirstName')}
                        returnKeyType = "next"
                        ref = {(input) => this.firstNameInput = input}
                        onPress={Keyboard.dismiss}
                        onSubmitEditing = {() => this.lastNameInput.focus()}
                        />

                        <TextInput style = {styles.input} placeholder = "Last Name"
                        onChangeText={(text) => this.validation(text, 'LastName')}
                        returnKeyType = "next"
                        ref = {(input) => this.lastNameInput = input}
                        onPress={Keyboard.dismiss}
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        />

                        <Text style = {styles.passwordText}> Password must contain at least one letter and number </Text>

                        <TextInput style={styles.input} placeholder="Password"
                        onChangeText={(text) => this.validation(text, 'Password')}
                        secureTextEntry={true}
                        returnKeyType="next"
                        onPress={Keyboard.dismiss}
                        ref={(input) => this.passwordInput = input}
                        onSubmitEditing={() => this.emailInput.focus()}

                        />

                        <TextInput style = {styles.input} placeholder = "Re-type Password"
                        onChangeText = {(text) => this.validation(text, 'RetypePassword')}
                        secureTextEntry={true}
                        returnKeyType = "next"
                        onPress={Keyboard.dismiss}
                        ref = {(input) => this.repasswordInput = input}
                        onSubmitEditing = {() => this.emailInput.focus()}

                        />

                        <TextInput style = {styles.input} placeholder = "E-mail"
                        onChangeText = {(text) => this.validation(text, 'Email')}
                        returnKeyType = "next"
                        onPress={Keyboard.dismiss}
                        ref = {(input) => this.emailInput = input}
                        
                        />

                        <TextInput style={styles.input} placeholder="Phone"
                        onChangeText={(text) => this.validation(text, 'Phone')}
                        returnKeyType="done"
                        keyboardType = "numeric"
                        onPress={Keyboard.dismiss}
                        ref={(input) => this.phoneInput = input}

                        />

                        <TouchableOpacity style = {styles.buttonContainer} onPress={this.handleSubmit}>
                        <Button onPress = {this.onSignupPress} color = 'white' title="Submit" testID = "submitButton" />
                        </TouchableOpacity>

                        <Button onPress = {() => this.props.navigation.navigate('Login')}
                        id = "submitButton"
                        color = "white"
                        title = "Already registered? Login"
                        testID = "submitButton"
                        fontSize = {12}
                        />

                </View>    
                </TouchableWithoutFeedback>
                </ScrollView>         
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000d1a',
        padding: 30,
        marginTop: 0
    }, 
    input : {
        height: 40,
        fontSize: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        marginBottom: 20,
        padding: 8,
        borderRadius: 5,
    }, 
    buttonContainer: {
        backgroundColor: '#0059b3', 
        borderRadius: 10,
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
        fontSize: 20,
        textAlign: 'center',
        marginTop: 35, 
        marginBottom: 30,
        color: 'white'
    }, 
    passwordStyle: {
        height: 40,
        fontSize: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 8
    }, 
    passwordText: {
        fontSize: 12,
        marginBottom: 10,
        fontStyle: 'italic',
        color: 'white',
        textAlign: 'center'
    }
});