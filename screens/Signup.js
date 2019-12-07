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

/**
 * This is the sign up page where if the user does not have an account registered in the database,
 * they will be prompted to create an account using their email address and password.
 * A validation check is implemented where the user is required to type their password twice
 * to confirm it. This is to ensure that the user can remember the password they have put in.
 * If the passwords don't match, an alert message will display notifying the user that
 * the passwords do not match.
 * When the Create Account button is pressed, it will register the user onto the database and
 * store the information whilst also navigating to the Homepage of the app.
 */

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
                this.props.navigation.navigate('Home'))
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

                        <TextInput style = {styles.input} placeholder = "First Name"

                        onChangeText = {firstName => this.setState({firstName})}
                        value={this.state.firstName}
                        returnKeyType = "next"


                        onPress={Keyboard.dismiss}
                        autoCapitalize = "none"

                        />

                        <TextInput style = {styles.input} placeholder = "Last Name"

                        onChangeText = {lastName => this.setState({lastName})}
                        value = {this.state.lastName}
                        returnKeyType = "next"

                        onPress={Keyboard.dismiss}
                        autoCapitalize = "none"

                        /> 

                            <TextInput
                                style={styles.input}
                                placeholder="E-mail"

                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                                returnKeyType="next"
                                onPress={Keyboard.dismiss}
                                autoCapitalize="none"


                            />

                        <TextInput 
                        style={styles.input} 
                        placeholder="Password"

                        onChangeText = {passWord => this.setState({ passWord })}
                        value = {this.state.passWord}
                        secureTextEntry={true}
                        returnKeyType="next"
                        onPress={Keyboard.dismiss}
                        autoCapitalize = "none"

                        />

                        <TextInput 
                        style = {styles.input} 
                        placeholder = "Confirm Password"
                        onChangeText = {reTypePassword => this.setState({reTypePassword})}
                        value = {this.state.reTypePassword}
                        secureTextEntry={true}
                        returnKeyType = "done"
                        onPress={Keyboard.dismiss}
                        autoCapitalize = "none"


                        />

                        {/* <TextInput style={styles.input} placeholder="Phone"

                        returnKeyType="done"
                        keyboardType = "numeric"
                        onPress={Keyboard.dismiss}


                        /> */}

                            <Text style={{ color: 'red', textAlign: 'center', alignItems: 'center', justifyContent: 'center', top: -10 }}> {this.state.errorMessage} </Text>

                        <TouchableOpacity style = {styles.buttonContainer} onPress={this.onSignupPress}>
                            <View>
                                <Icon name="user-plus" style={{ margin: 5, top: 5, alignItems: 'center', left: 130 }} size={25} color="white" />
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
        backgroundColor: '#fafafa',
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