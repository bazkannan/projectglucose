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
import { CheckBox } from 'react-native-elements';
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

    diabetesQuestion = state => event => {
        if (this.state.fever === false) {
            alert("If you've selected 'No', please note this section is only for diabetics on medication!")
        } else {
            this.handleSetState;
        }
    }

    state = {
        termsAccepted: false
    }

    handleCheckBox = () => this.setState({ termsAccepted: !this.state.termsAccepted })

    goToResults = () => {
        if (this.state.temp == "") {
            alert("You need to input your blood sugar level!")
        } else if (this.state.fever == false) {
            alert ("If you answered 'No' for the first question, please note this section is only for diabetics on medication!")
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
                        top: 10
                        }}> Click on the toggle to select your choice </Text>

                <Text style={styles.choiceText}> Patient is taking medications for diabetes? </Text>
                <View style = {toggle.container}>
                    <TouchableOpacity style = {toggle.feverToggle}
                    onPress = {this.handleSetState("fever")}>
                    {/* onPress = {this.diabetesQuestion("fever")}>  */}
                        <Text style = {toggle.toggleLabel}> {this.state.fever ? 'Yes' : 'No' } </Text>
                    </TouchableOpacity>
                </View>

                <Text style = {styles.choiceText}> What is your blood sugar level? </Text>
                <TextInput 
                    style = {{ height: 40, backgroundColor: 'white', borderColor: 'white', borderWidth: 2, borderRadius: 5, width: '15%', padding: 3 }}
                    textAlign={'center'}
                    keyboardAppearance = "dark"
                    keyboardType = "numeric"
                    blurOnSubmit 
                    returnKeyType = 'done'
                    maxLength = {100}
                    color = 'black'
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

                    <View>
                        
                        <CheckBox 
                        center
                        title= "Metformin"
                        selected = {this.state.termsAccepted}
                        onPress = {this.handleCheckBox}
                        checkedIcon = 'dot-circle-o'
                        uncheckedIcon = 'circle-o'
                        style = {{alignItems: 'left', textAlign: 'left'}}
                        checked={this.state.checked}
                        />

                        <CheckBox
                            center
                            title="Short acting Insulin (e.g. Humulin S, Apidra, Novorapid)"
                            style = {{alignItems: 'left'}}
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.checked}
                        />

                        <CheckBox
                            center
                            title="Intermediate or Long acting Insulin (incl combination insulins)"
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.checked}
                        />

                        <CheckBox
                            center
                            title="Alpha Glucosidase inhibitors (Acarbose, Miglitol)"
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.checked}
                        />

                        <CheckBox
                            center
                            title="DPP 4 inhibitors (Gliptins)"
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.checked}
                        />

                        <CheckBox
                            center
                            title="GLP receptor antagonists (Glutides and Exenatide)"
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.checked}
                        />

                        <CheckBox
                            center
                            title="Meglitinides (Glinides like Nateglinide etc)"
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.checked}
                        />

                        <CheckBox
                            center
                            title="SGLT 2 inhibitors (Flozins)"
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.checked}
                        />

                        <CheckBox
                            center
                            title="Sulphonyureas (Glicazide, Glipizide, Glibanclamide, Glyburide, Glimepiride)"
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.checked}
                        />

                        <CheckBox
                            center
                            title="Thiasolidinediones (Glitazones)"
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.checked}
                        />
                    </View>
                    

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

            
                <View style = {{flexDirection: 'row'}}>
                        <TouchableOpacity 
                        style={{ alignItems: 'center', 
                        backgroundColor: "maroon", 
                        justifyContent: 'center', 
                        borderRadius: 7, 
                        width: 150, 
                        height: 40, 
                        top: 30, 
                        padding: 7, 
                        left: 20}}
                        onPress={() => this.setState({ temp: '', diabetic: true, fever: true, cough: true, anaesthesia: true})}
                        >
                            <Text 
                            style={styles.buttonText}
                                onPress={() => this.setState({ temp: '', diabetic: true, fever: true, cough: true, anaesthesia: true})}
                            > 
                            Reset 
                            </Text>
                        </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.button}
                    blurOnSubmit
                    onPress = {() => this.goToResults()}
                >   
                <Text style = {styles.buttonText}> Submit </Text>
                </TouchableOpacity>
                </View>
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
        marginTop: '0%'
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
        margin: 30,
        width: 150,
        height: 40,
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 19
    },
    checkBox: {
        flexDirection: 'column',
        alignItems: 'center'
    }
});