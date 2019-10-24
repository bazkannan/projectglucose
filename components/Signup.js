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
    StatusBar 
} from 'react-native'

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            occupation: "",
            firstName: "", 
            lastName: "",
            passWord: "", 
            reTypePassword: "",
            email: "" 
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
            "Occupation": this.state.occupation,
            "FirstName": this.state.firstName, 
            "LastName": this.state.lastName, 
            "Password": this.state.passWord,
            "Email": this.state.email
        };

        fetch('', {
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
            case "occupation" : {
                this.setState ({occupation: text})
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
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
                <View style = {styles.container}>
                    <StatusBar barStyle = 'default' />
                    <ScrollView>
                        <Text style = {styles.heading}> Sign Up! </Text>

                        <TextInput style = {styles.input} 
                        placeholder = "Username minimum 5 characters"
                        onChangeText = {(text) => this.validation(text, 'username')}
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.firstNameInput.focus()}
                        />

                        <TextInput style = {styles.input} placeholder = "First Name"
                        onChangeText = {(text) => this.validation(text, 'FirstName')}
                        returnKeyType = "next"
                        ref = {(input) => this.firstNameInput = input}
                        onSubmitEditing = {() => this.lastNameInput.focus()}
                        />

                        <TextInput style = {styles.input} placeholder = "Last Name"
                        onChangeText={(text) => this.validation(text, 'LastName')}
                        returnKeyType = "next"
                        ref = {(input) => this.lastNameInput = input}
                        onSubmitEditing = {() => this.repasswordInput.focus()}
                        />

                        <Text style = {styles.passwordText}> Password must contain at least one letter and number </Text>

                        <TextInput style = {styles.input} placeholder = "Re-type Password"
                        onChangeText = {(text) => this.validation(text, 'RetypePassword')}
                        secureTextEntry
                        returnKeyType = "next"
                        ref = {(input) => this.repasswordInput = input}
                        onSubmitEditing = {() => this.emailInput.focus()}

                        />

                        <TextInput style = {styles.input} placeholder = "Email"
                        onChangeText = {(text) => this.validation(text, 'Email')}
                        returnKeyType = "done"
                        ref = {(input) => this.emailInput = input}
                        
                        />

                        <TouchableOpacity style = {styles.buttonContainer} onPress={this.handleSubmit}>
                        <Button onPress = {this.handleSubmit} color = 'white' title="SUBMIT" testID = "submitButton" />
                        </TouchableOpacity>

                        <Button onPress = {() => this.props.navigation.navigate('Login')}
                        id = "submitButton"
                        color = "white"
                        title = "Already registered? Login"
                        testID = "submitButton"
                        />

                    </ScrollView>
                </View>             
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#00a8ff',
        padding: 15,
    }, 
    input : {
        height: 40,
        fontSize: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        marginBottom: 20,
        padding: 8,
    }, 
    buttonContainer: {
        backgroundColor: 'green', 
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
        fontSize: 13,
        marginBottom: 10,
        fontStyle: 'italic'
    }
});