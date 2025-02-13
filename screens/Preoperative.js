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
    SafeAreaView, Alert
} from "react-native";
import { CheckBox } from 'react-native-elements';
import { FlatList } from "react-native-gesture-handler";

/**
 * This is the screen for the Preoperative Clinic. Here the user can input a value for the Hb1Ac levels
 * as well as selecting the toggle options for the questions. There is also a checkbox component
 * where the user can select all the combinations of medications the diabetic patient is on.
 * A reset button is shown at the bottom which will reset all the state variables to its default value.
 * The submit button when clicked on will display a confirmation in which it will prompt the user
 * to check their answers before submitting.
 * Data validation is also implemented where the user can only input the values that are allowed
 * as well as ensuring that at least one medication is selected before the user can proceed.
 */

export default class Preoperative extends Component {

    static navigationOptions = {
        headerTransparent: true, 
        title: 'Pre-Op Clinic',
        headerTitle: 'Pre-Op Clinic',
        headerStyle: { borderBottomWidth: 0 }
    }; 

   
    constructor() {
        super();
        this.state = ({
            patient: true, 
            temp: "", 
            levels: true,
            surgery: true,
            anaesthesia: true,
            metformin: false,
            shortInsulin: false,
            intermediateInsulin: false,
            alpha: false,
            dppFour: false,
            glpReceptor: false,
            meglitinides: false,
            sgltTwo: false,
            sulphonyureas: false,
            thiasolidinediones: false,
        });
    }

    handleSetState = state => event => {
        this.setState({
            [state]: !this.state[state]
        })
    };


    goToResults = () => {
        if (this.state.patient === false) {
            alert ("If you answered 'No' for the first question, please note this section is only for diabetics on medication!")
        } else if (this.state.levels === false) {
            alert("Please repeat HBA1C, input the value and run the app.")
        } else if (this.state.metformin === false && this.state.shortInsulin === false && this.state.intermediateInsulin === false &&
            this.state.alpha === false && this.state.dppFour === false && this.state.glpReceptor === false &&
            this.state.meglitinides === false && this.state.sgltTwo === false
            && this.state.sulphonyureas === false && this.state.thiasolidinediones === false) {
            alert("Please choose at least one medication from the list")
        } else if (this.state.levels === true && this.state.temp < 31 || this.state.temp > 125) {
            alert ("Values must be within the range (31 - 125) mmol / mol")
        } else {
            Alert.alert(
                'Alert',
                'Please check your answers before submitting. Are you sure you want to proceed?',
                [
                    {
                        text: 'Yes',
                        onPress: () => this.props.navigation.navigate('PreopResult', {
                        levels: this.state.levels,
                        temp: this.state.temp,
                        patient: this.state.patient,
                        surgery: this.state.surgery,
                        anaesthesia: this.state.anaesthesia,
                        metformin: this.state.metformin,
                        shortInsulin: this.state.shortInsulin,
                        intermediateInsulin: this.state.intermediateInsulin,
                        alpha: this.state.alpha,
                        dppFour: this.state.dppFour,
                        glpReceptor: this.state.glpReceptor,
                        meglitinides: this.state.meglitinides,
                        sgltTwo: this.state.sgltTwo,
                        sulphonyureas: this.state.sulphonyureas,
                        thiasolidinediones: this.state.thiasolidinediones,
                        }),
                        style: 'cancel' 
                    },
                    {
                        text: 'No',
                        onPress: () => { return null },

                    },
                ],
                { cancelable: false },
            );


            // this.props.navigation.navigate('PreopResult', {
            //     levels: this.state.levels, 
            //     temp: this.state.temp, 
            //     patient: this.state.patient,
            //     surgery: this.state.surgery,
            //     anaesthesia: this.state.anaesthesia,
            //     metformin: this.state.metformin,
            //     shortInsulin: this.state.shortInsulin,
            //     intermediateInsulin: this.state.intermediateInsulin,
            //     alpha: this.state.alpha,
            //     dppFour: this.state.dppFour,
            //     glpReceptor: this.state.glpReceptor,
            //     meglitinides: this.state.meglitinides,
            //     sgltTwo: this.state.sgltTwo,
            //     sulphonyureas: this.state.sulphonyureas,
            //     thiasolidinediones: this.state.thiasolidinediones
            // })
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
            patientToggle: {
                height: 40, 
                width: 50, 
                backgroundColor: this.state.patient ? "#55acee" : '#CB6161', 
                alignItems: 'center', 
                justifyContent: 'center', 
                left: this.state.patient ? 50: 0, 
                borderRadius: 3
            }, 
            toggleLabel: {
                fontSize: 15,
                color: '#FFF'
            }, 
            levelsToggle: {
                height: 40, 
                width: 50, 
                backgroundColor: this.state.levels ? "#55acee" : '#CB6161', 
                alignItems: 'center', 
                justifyContent: 'center', 
                left: this.state.levels ? 50 : 0, 
                borderRadius: 3 
            }, 
            surgeryToggle: {
                height: 40,
                width: 250,
                backgroundColor: this.state.surgery ? "#55acee" : '#CB6161',
                alignItems: 'center',
                justifyContent: 'center',
                left: this.state.surgery ? 0 : 0,
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
                        fontSize: 26,
                        fontWeight: "bold",
                        fontStyle: "italic",
                        color: "red",
                        top: 0,
                        textAlign: 'center',
                        alignItems: 'center'}}> --PRE-OPERATIVE CLINIC-- </Text>

                    

                {/* <Text style={styles.choiceText}> Patient is taking medications for diabetes? </Text>
                <View style = {toggle.container}>
                    <TouchableOpacity style = {toggle.patientToggle}
                    onPress = {this.handleSetState("patient")}>
                    
                        <Text style = {toggle.toggleLabel}> {this.state.patient ? 'Yes' : 'No' } </Text>
                    </TouchableOpacity>
                </View> */}


                    <Text style={{
                        fontSize: 32,
                        fontWeight: "600",
                        color: "white",
                        top: 20,
                        textAlign: 'center',
                        alignItems: 'center'
                    }}> Tap on the toggle to select your choice </Text>
                    
                    <Text style={styles.choiceText}> 1. HbA1c levels done within last 3 months? </Text>
                <View style = {toggle.container} >
                    <TouchableOpacity style = {toggle.levelsToggle}
                    onPress={this.handleSetState("levels")}>
                        <Text style = {toggle.toggleLabel}> {this.state.levels ? 'Yes' : 'No' } </Text>
                    </TouchableOpacity>
                </View>

                    <Text style={styles.choiceText}> 2. If 'Yes' to the previous question, input the HbA1c level (Accepted values 31 - 125)</Text>
                    <View style = {{flexDirection: 'row'}}>
                    <TextInput
                        style={{ height: 40, backgroundColor: 'white', borderColor: 'white', borderWidth: 2, borderRadius: 5, width: '15%', padding: 3 }}
                        textAlign={'center'}
                        keyboardAppearance="dark"
                        keyboardType="numeric"
                        blurOnSubmit
                        placeholder = "69"
                        returnKeyType='done'
                        maxLength={100}
                        color='black'
                        onChangeText={(temp) => this.setState({ temp })}
                        value={this.state.temp} /> 
                        <Text style={{
                            fontSize: 17,
                            fontWeight: "600",
                            color: "white",
                            top: 8,
                            left: 5
                         }}> mmol / mol </Text>
                    </View>

                    <Text style={styles.choiceText}> 3. Type of Surgery (TAP TO SELECT) </Text>
                    <View style={toggle.container2} >
                        <TouchableOpacity style={toggle.surgeryToggle}
                            onPress={this.handleSetState("surgery")}>
                            <Text style={toggle.toggleLabel}> {this.state.surgery ? 'Day case / Overnight stay' : 'In-patient (>2 nights stay)'} </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.choiceText}> 4. Type of Anaesthesia (TAP TO SELECT) </Text>
                    <View style={toggle.container2} >
                        <TouchableOpacity style={toggle.anaesthesiaToggle}
                            onPress={this.handleSetState("anaesthesia")}>
                            <Text style={toggle.toggleLabel}> {this.state.anaesthesia ? 'General / Regional Anaesthesia / Deep sedation' : 'Local anaesthesia (including eye blocks) / Conscious sedation'} </Text>
                        </TouchableOpacity>
                    </View>

                <Text style={styles.choiceText}> 5. Please choose patient's current anti-diabetic medications from the list below (Choose all that apply) </Text>
                {/* <Text style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        color: "white",
                        textAlign: 'center',
                        top: -15,
                        }}> Choose all that apply </Text> */}

                <View>

                    <CheckBox
                        left
                        title= "Metformin"
                        onPress = {() => this.setState({metformin: !this.state.metformin})}
                        checkedIcon = 'dot-circle-o'
                        uncheckedIcon = 'circle-o'
                        style = {{alignItems: 'left', textAlign: 'left'}}
                        checked={this.state.metformin}
                    />

                    <CheckBox
                        left
                        title="Short acting Insulin (e.g. Humulin S, Apidra, Novorapid)"
                        style = {{alignItems: 'left'}}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress = {() => this.setState({shortInsulin: !this.state.shortInsulin})}
                        checked={this.state.shortInsulin}
                    />

                    <CheckBox
                        left
                        title="Intermediate or Long acting Insulin (incl combination insulins)"
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress = {() => this.setState({intermediateInsulin: !this.state.intermediateInsulin})}
                        checked={this.state.intermediateInsulin}
                    />

                    <CheckBox
                        left
                        title="Alpha Glucosidase inhibitors (Acarbose, Miglitol)"
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress = {() => this.setState({alpha: !this.state.alpha})}
                        checked={this.state.alpha}
                    />

                    <CheckBox
                        left
                        title="DPP 4 inhibitors (Gliptins)"
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => this.setState({ dppFour: !this.state.dppFour })}
                        checked={this.state.dppFour}
                    />

                    <CheckBox
                        left
                        title="GLP receptor antagonists (Glutides and Exenatide)"
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => this.setState({ glpReceptor: !this.state.glpReceptor })}
                        checked={this.state.glpReceptor}
                    />

                    <CheckBox
                        left
                        title="Meglitinides (Glinides like Nateglinide etc)"
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => this.setState({ meglitinides: !this.state.meglitinides })}
                        checked={this.state.meglitinides}
                    />

                    <CheckBox
                        left
                        title="SGLT 2 inhibitors (Flozins)"
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => this.setState({ sgltTwo: !this.state.sgltTwo })}
                        checked={this.state.sgltTwo}
                    />

                    <CheckBox
                        left
                        title="Sulphonyureas (Glicazide, Glipizide, Glibanclamide, Glyburide, Glimepiride)"
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => this.setState({ sulphonyureas: !this.state.sulphonyureas })}
                        checked={this.state.sulphonyureas}
                    />

                    <CheckBox
                        left
                        title="Thiasolidinediones (Glitazones)"
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => this.setState({ thiasolidinediones: !this.state.thiasolidinediones })}
                        checked={this.state.thiasolidinediones}
                    />
                </View>

            
                <View style = {{flexDirection: 'row', top: -10}}>
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
                        onPress={() => this.setState({ temp: '', surgery: true, patient: true, levels: true, anaesthesia: true, metformin: false, shortInsulin: false, intermediateInsulin: false, alpha: false, dppFour: false, glpReceptor: false, meglitinides: false, sgltTwo: false, sulphonyureas: false, thiasolidinediones: false})}
                        >
                            <Text 
                            style={styles.buttonText}
                                onPress={() => this.setState({ temp: '', surgery: true, patient: true, levels: true, anaesthesia: true, metformin: false, shortInsulin: false, intermediateInsulin: false, alpha: false, dppFour: false, glpReceptor: false, meglitinides: false, sgltTwo: false, sulphonyureas: false, thiasolidinediones: false})}
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
        marginBottom: '5%',
        textAlign: 'center',
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