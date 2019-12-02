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

export default class OnTheDay extends Component {
    static navigationOptions = {
        headerTransparent: true,
        title: 'On-The-Day Clinic',
        headerTitle: 'On-The-Day Clinic',
        headerStyle: { borderBottomWidth: 0 }
    }; 
    constructor() {
        super();
        this.state = ({
            cancer: true,
            bloodPressure: true,
            glucose: ""
        });
    }

    handleSetState = state => event => {
        this.setState({
            [state]: !this.state[state]
        })
    };

    goToResults = () => {
        if (this.state.glucose == "") {
            alert("Please enter a numeric value for glucose levels");
        } else if (this.state.glucose <= 0) {
            alert("Please enter a positive integer");
        } else {
            Alert.alert(
                'Alert',
                'Please check your answers before submitting. Are you sure you want to proceed?',
                [
                    {
                        text: 'Yes',
                        onPress: () => this.props.navigation.navigate('OnTheDayResult', {
                            cancer: this.state.cancer,
                            glucose: this.state.glucose,
                            bloodPressure: this.state.bloodPressure, 
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

            // this.props.navigation.navigate('OnTheDayResult'
            // , {
            //     cancer: this.state.cancer,
            //     glucose: this.state.glucose,
            //     bloodPressure: this.state.bloodPressure,
                
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
            cancerToggle: {
                height: 40,
                width: 50,
                backgroundColor: this.state.cancer ? "#55acee" : '#CB6161',
                alignItems: 'center',
                justifyContent: 'center',
                left: this.state.cancer ? 50 : 0,
                borderRadius: 3
            },
            toggleLabel: {
                fontSize: 15,
                color: '#FFF'
            },
            bloodPressureToggle: {
                height: 40,
                width: 50,
                backgroundColor: this.state.bloodPressure ? "#55acee" : '#CB6161',
                alignItems: 'center',
                justifyContent: 'center',
                left: this.state.bloodPressure ? 50 : 0,
                borderRadius: 3
            },
            glucoseToggle: {
                height: 40,
                width: 50,
                backgroundColor: this.state.glucose ? "#55acee" : '#CB6161',
                alignItems: 'center',
                justifyContent: 'center',
                left: this.state.glucose ? 50 : 0,
                borderRadius: 3
            },
        });
        return (
            <ScrollView style={styles.screen}>
                <SafeAreaView style={styles.container}>
                    <View style={{ marginTop: '10%' }} />

                    <Text style={{
                        fontSize: 26,
                        fontWeight: "bold",
                        fontStyle: "italic",
                        color: "red",
                        top: -10,
                        textAlign: 'center',
                        alignItems: 'center'
                    }}> --ON THE DAY CLINIC-- </Text>



                    {/*<Text style={styles.choiceText}> Question One </Text>*/}
                    {/*<View style={toggle.container}>*/}
                    {/*    <TouchableOpacity style={toggle.cancerToggle}*/}
                    {/*        onPress={this.handleSetState("cancer")}>*/}
                    {/*        /!* onPress = {this.diabetesQuestion("patient")}>  *!/*/}
                    {/*        <Text style={toggle.toggleLabel}> {this.state.cancer ? 'Yes' : 'No'} </Text>*/}
                    {/*    </TouchableOpacity>*/}
                    {/*</View>*/}

                    <Text style={styles.choiceText}> 1. Today's blood glucose value </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={{ height: 40, backgroundColor: 'white', borderColor: 'white', borderWidth: 2, borderRadius: 5, width: '15%', padding: 3 }}
                            textAlign={'center'}
                            keyboardAppearance="dark"
                            keyboardType="numeric"
                            blurOnSubmit
                            placeholder="69"
                            returnKeyType='done'
                            maxLength={100}
                            color='black'
                            onChangeText={(glucose) => this.setState({ glucose })}
                            value={this.state.glucose} />
                        <Text style={{
                            fontSize: 17,
                            fontWeight: "600",
                            color: "white",
                            top: 8,
                            left: 5
                        }}> mmol </Text>
                    </View>

                    <Text style={{
                        fontSize: 32,
                        fontWeight: "600",
                        color: "white",
                        top: 20,
                        textAlign: 'center',
                        alignItems: 'center'
                    }}> Tap on the toggle to select your choice </Text>

                    <Text style={styles.choiceText}> 2. If today's blood glucose value > 12, select Urine / Capillary Ketones value </Text>
                    <View style={toggle.container} >
                        <TouchableOpacity style={toggle.bloodPressureToggle}
                                          onPress={this.handleSetState("bloodPressure")}>
                            <Text style={toggle.toggleLabel}> {this.state.bloodPressure ? '3+' : '2 or less'} </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', top: -10 }}>
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                backgroundColor: "maroon",
                                justifyContent: 'center',
                                borderRadius: 7,
                                width: 150,
                                height: 40,
                                top: 30,
                                padding: 7,
                                left: 20
                            }}
                            onPress={() => this.setState({ glucose: '', cancer: true, bloodPressure: true })}
                        >
                            <Text
                                style={styles.buttonText}
                                onPress={() => this.setState({ glucose: '', cancer: true, bloodPressure: true })}
                            >
                                Reset
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            blurOnSubmit
                            onPress={() => this.goToResults()}
                        >
                            <Text style={styles.buttonText}> Submit </Text>
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