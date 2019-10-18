import React, { Component } from "react";
import {
    TextInput, 
    StyleSheet,
    Text,
    View, 
    Keyboard, 
    TouchableOpacity, 
    Button, 
    ActivityIndicator, 
    Switch, 
    ScrollView,
    Platform, 
    SafeAreaView
} from "react-native";

export default class Preoperative extends Component {
    static navigationOptions = {
        headerTransparent: true, 
        headerStyle: { borderBottomWidth: 0 }
    }; 
    constructor() {
        super();
        this.state = ({
            fever: true, 
            temp: "", 
            cough: true
        });
    }

    handleSetState = state => event => {
        this.setState({
            [state]: !this.state[state]
        })
    };

    goToResults = () => {
        if (this.state.temp == "") {
            alert("You need to input your temperature!")
        } else {
            this.props.navigation.navigate('Result', {
                cough: this.state.cough, 
                temp: this.state.temp, 
                fever: this.state.fever
            })
        }
    }

    render() {
        const toggle = StyleSheet.create({
            container: {
                height: 40, 
                width: 100, 
                backgroundColor: '#C7C1C1', 
                borderRadius: 3
            }, 
            feverToggle: {
                height: 40, 
                width: 50, 
                backgroundColor: this.state.fever ? "#55acee" : '#CB6161', 
                alignItems: 'center', 
                justifyContent: 'center', 
                left: this.state.fever ? 50: 0, 
                borderRadius: 3
            }, 
            toggleLabel: {
                fontSize: 15,
                color: '#FFF'
            }, 
            coughToggle: {
                height: 40, 
                width: 50, 
                backgroundColor: this.state.cough ? "#55acee" : '#CB6161', 
                alignItems: 'center', 
                justifyContent: 'center', 
                left: this.state.cough ? 50 : 0, 
                borderRadius: 3 
            }, 
        });
        return (
            <ScrollView>
            <SafeAreaView style = {styles.container}>
                <View style = {{marginTop: '10%'}}/>
                <Text style = {styles.choiceText}> Have you had a fever over the last 5 days? </Text>
                <View style = {toggle.container}>
                    <TouchableOpacity style = {toggle.feverToggle}
                    onPress = {this.handleSetState("fever")}>
                        <Text style = {toggle.toggleLabel}> {this.state.fever ? 'Yes' : 'No' } </Text>
                    </TouchableOpacity>
                </View>
                <Text style = {styles.choiceText}> What is your temperature in Celsius? </Text>
                <TextInput 
                    style = {{ height: 40, borderBottomColor: '#000', borderBottomWidth: 2, width: '15%', padding: 3 }}
                    textAlign={'center'}
                    keyboardType = 'numeric' 
                    returnKeyType = 'done' 
                    onChangeText = {(temp) => this.setState({temp})}
                    value={this.state.temp} /> 
                <Text style = {styles.choiceText}> Have you had cough? </Text>

                <View style = {toggle.container} >
                    <TouchableOpacity style = {toggle.coughToggle}
                    onPress={this.handleSetState("cough")}
                    >
                        <Text style = {toggle.toggleLabel}> {this.state.cough ? 'Yes' : 'No' } </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style = {styles.button}
                    onPress = {() => this.goToResults()}
                >   
                <Text style = {styles.buttonText}> Submit </Text>
                </TouchableOpacity>
            </SafeAreaView>
            </ScrollView>
        );
     }
 }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    toggleLabel: {
        fontSize: 22,
        color: '#FFF'
    },
    choiceText: {
        fontSize: 17,
        fontWeight: "600",
        color: "black",
        marginTop: '16%',
        marginBottom: '5%'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#349beb',
        padding: 7,
        borderRadius: 7,
        margin: 50,
        width: 150,
        height: 40,
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 19
    },
});