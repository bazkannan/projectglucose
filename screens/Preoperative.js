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

import { FlatList } from "react-native-gesture-handler";


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
            cough: true,
            diabetic: true,
            anaesthesia: true,
            medications: []
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
        } else if (this.state.fever == "No") {
            alert ("This app is only for diabetics on medication!")
        } else {
            this.props.navigation.navigate('PreopResult', {
                cough: this.state.cough, 
                temp: this.state.temp, 
                fever: this.state.fever,
                diabetic: this.state.diabetic,
                anaesthesia: this.state.anaesthesia,
                medications: this.state.medications
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
            diabeticToggle: {
                height: 40,
                width: 250,
                backgroundColor: this.state.diabetic ? "#55acee" : '#CB6161',
                alignItems: 'center',
                justifyContent: 'center',
                left: this.state.diabetic ? 0 : 0,
                borderRadius: 3 
            }, 
            anaesthesiaToggle: {
                height: 60,
                width: 250,
                backgroundColor: this.state.anaesthesia ? "#55acee" : '#CB6161',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                left: this.state.anaesthesia ? 0 : 0,
                borderRadius: 3 
            }
        });
        return (
            <ScrollView style = {styles.screen}>
            <SafeAreaView style = {styles.container}>
                <View style = {{marginTop: '10%'}}/>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: "600",
                        color: "white",
                        top: 20
                        }}> Click on the toggle to select your choice </Text>

                <Text style={styles.choiceText}> Patient is taking medications for diabetes? </Text>
                <View style = {toggle.container}>
                    <TouchableOpacity style = {toggle.feverToggle}
                    onPress = {this.handleSetState("fever")}>
                        <Text style = {toggle.toggleLabel}> {this.state.fever ? 'Yes' : 'No' } </Text>
                    </TouchableOpacity>
                </View>

                <Text style = {styles.choiceText}> What is your blood sugar level? </Text>
                <TextInput 
                    style = {{ height: 40, borderBottomColor: 'white', borderBottomWidth: 2, width: '15%', padding: 3 }}
                    textAlign={'center'}
                    keyboardAppearance = "dark"
                    keyboardType = "numeric"
                    blurOnSubmit 
                    returnKeyType = 'done'
                    maxLength = {100}
                    color = 'white'
                    onChangeText = {(temp) => this.setState({temp})}
                    value={this.state.temp} /> 

                    <Text style={styles.choiceText}> Medications (including drug combinations) </Text>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        color: "white",
                        textAlign: 'left',
                        top: -15,
                        left: -93
                        }}> Choose all that apply </Text>

                    

                    <Text style={styles.choiceText}> HbA1c levels done within last 3 months? </Text>
                <View style = {toggle.container} >
                    <TouchableOpacity style = {toggle.coughToggle}
                    onPress={this.handleSetState("cough")}>
                        <Text style = {toggle.toggleLabel}> {this.state.cough ? 'Yes' : 'No' } </Text>
                    </TouchableOpacity>
                </View>

                    <Text style={styles.choiceText}> Type of Surgery </Text>
                    <View style={toggle.container2} >
                        <TouchableOpacity style={toggle.diabeticToggle}
                            onPress={this.handleSetState("diabetic")}>
                            <Text style={toggle.toggleLabel}> {this.state.diabetic ? 'Day case / Overnight stay' : 'In-patient (>2 nights stay)'} </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.choiceText}> Type of Anaesthesia </Text>
                    <View style={toggle.container2} >
                        <TouchableOpacity style={toggle.anaesthesiaToggle}
                            onPress={this.handleSetState("anaesthesia")}>
                            <Text style={toggle.toggleLabel}> {this.state.anaesthesia ? 'General / Regional Anaesthesia / Deep sedation' : 'Local anaesthesia (including eye blocks) / Conscious sedation'} </Text>
                        </TouchableOpacity>
                    </View>

            

                <TouchableOpacity
                    style = {styles.button}
                    blurOnSubmit
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
    screen: {
        flex: 1,
        padding: 10,
        backgroundColor: '#000d1a',
        alignItems: 'center',
        marginTop: '10%'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? 100 : 0
    },
    toggleLabel: {
        fontSize: 22,
        color: '#FFF',
        textAlign: 'center'
    },
    choiceText: {
        fontSize: 17,
        fontWeight: "600",
        color: "white",
        marginTop: '16%',
        marginBottom: '5%'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#0059b3',
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