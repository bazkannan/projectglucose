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
    Keyboard, 
    ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as firebase from 'firebase';


export default class Signup extends Component {

    static navigationOptions = {
        header: null,
        headerStyle: { backgroundColor: '00a8ff' },
    };
    // constructor(props) {
    //     super(props);
  //      this.state
        state = { 
            firstName: '',
            lastName: '',
            email: '',
            passWord: '', 
            reTypePassword: '',
            errorMessage: null,
        }
    

    componentDidUpdate() {
        setTimeout(() => this.setState({errorMessage: ''}), 10000);
    }

    onSignupPress = (event) => {

        event.preventDefault();
        console.log('handle the sign up submit');

        if (this.state.passWord !== this.state.reTypePassword) {
            alert('Error. Passwords are not matching');
            return;
        }

        let data = {
            "FirstName": this.state.firstName, 
            "LastName": this.state.lastName, 
            "Email": this.state.email,
            "Password": this.state.passWord,
            "Re-type Password": this.state.reTypePassword,
        };

        if (this.state.email == "" || this.state.passWord == "" || this.state.firstName == "" || this.state.lastName == "") {
            alert("Empty fields. Please input some text before submitting");
            return;
        }
        console.log('Account Created');
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.passWord)
            .then(() => 
                this.props.navigation.navigate('AccountCreated'))
                .catch(error => this.setState({ errorMessage: error.message}))
        }
    

    render() {
        return (
            <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
                
                <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
                <View style = {styles.container}>
                    <View style = {{marginBottom: 50}}>  
                    <StatusBar barStyle = 'default' />
                    
                        <Text style = {styles.heading}> Sign Up to FastAID! </Text>

                        {/* <TextInput style = {styles.input} 
                        placeholder = "Username"
                        onChangeText = {(text) => this.validation(text, 'username')}
                        returnKeyType = "next"
                        onPress = {Keyboard.dismiss}
                        autoCapitalize = "none"
                        onSubmitEditing = {() => this.firstNameInput.focus()}
                        /> */}

                        <TextInput style = {styles.input} placeholder = "First Name"
                        // onChangeText = {(text) => this.validation(text, 'FirstName')}
                        onChangeText = {firstName => this.setState({firstName})}
                        value={this.state.firstName}
                        returnKeyType = "next"
                        // ref = {(input) => this.firstNameInput = input}

                        onPress={Keyboard.dismiss}
                        autoCapitalize = "none"
                        // onSubmitEditing = {() => this.lastNameInput.focus()}
                        />

                        <TextInput style = {styles.input} placeholder = "Last Name"
                        // onChangeText={(text) => this.validation(text, 'LastName')}
                        onChangeText = {lastName => this.setState({lastName})}
                        value = {this.state.lastName}
                        returnKeyType = "next"
                        // ref = {(input) => this.lastNameInput = input}
                        onPress={Keyboard.dismiss}
                        autoCapitalize = "none"
                        // onSubmitEditing = {() => this.passwordInput.focus()}
                        /> 

                            <TextInput
                                style={styles.input}
                                placeholder="E-mail"
                                // onChangeText = {(text) => this.validation(text, 'Email')}
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                                returnKeyType="next"
                                onPress={Keyboard.dismiss}
                                autoCapitalize="none"
                                // ref={(input) => this.emailInput = input}

                            />

                        {/* <Text style = {styles.passwordText}> Password must contain at least one letter and number </Text> */}

                        <TextInput 
                        style={styles.input} 
                        placeholder="Password"
                        // onChangeText={(text) => this.validation(text, 'Password')}
                        onChangeText = {passWord => this.setState({ passWord })}
                        value = {this.state.passWord}
                        secureTextEntry={true}
                        // returnKeyType="next"
                        onPress={Keyboard.dismiss}
                        autoCapitalize = "none"
                        // ref={(input) => this.passwordInput = input}
                        // onSubmitEditing={() => this.emailInput.focus()}

                        />

                        <TextInput 
                        style = {styles.input} 
                        placeholder = "Confirm Password"
                        // onChangeText = {(text) => this.validation(text, 'RetypePassword')}
                        onChangeText = {reTypePassword => this.setState({reTypePassword})}
                        value = {this.state.reTypePassword}
                        secureTextEntry={true}
                        returnKeyType = "next"
                        onPress={Keyboard.dismiss}
                        autoCapitalize = "none"
                        // ref = {(input) => this.repasswordInput = input}
                        // onSubmitEditing = {() => this.emailInput.focus()}

                        />

                        {/* <TextInput style={styles.input} placeholder="Phone"
                        onChangeText={(text) => this.validation(text, 'Phone')}
                        returnKeyType="done"
                        keyboardType = "numeric"
                        onPress={Keyboard.dismiss}
                        ref={(input) => this.phoneInput = input}

                        /> */}

                            <Text style={{ color: 'red', textAlign: 'center', alignItems: 'center', justifyContent: 'center', top: -10 }}> {this.state.errorMessage} </Text>

                        <TouchableOpacity style = {styles.buttonContainer} onPress={this.onSignupPress}>
                            <View>
                                <Icon name="user-plus" style={{ margin: 5, top: 5, alignItems: 'center', left: 110 }} size={25} color="white" />
                            </View>
                        <Button onPress = {this.onSignupPress} color = 'white' title="Create Account" testID = "submitButton" />
                        </TouchableOpacity>

                        <Button onPress = {() => this.props.navigation.navigate('Login')}
                        id = "submitButton"
                        color = "white"
                        title = "Already registered? Login"
                        testID = "submitButton"
                        fontSize = {12}
                        />
                    </View>         
                </View>    
                </TouchableWithoutFeedback>
                         
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
        marginTop: 0,
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
        borderRadius: 5,
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