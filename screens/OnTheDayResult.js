import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Keyboard, TouchableHighlight, TouchableOpacity, Button, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

/**
 * This screen will display the results for the On-The-Day clinic assessment. Based on the options the
 * user selects, a set of instructions will be displayed on the screen for the doctor to follow
 * and advise their patients.
 * When the submit button is pressed, a RESTApi request is sent to the backend and then communicated
 * back to the user a particular result dependent on the options the user has selected.
 */

export default class OnTheDayResult extends Component {
    static navigationOptions = {
        headerTransparent: true,
        headerTitle: 'Result',
        title: 'Result',
        headerStyle: { borderBottomWidth: 0 }
    };
    constructor() {
        super();
        this.state = ({
            result: null
        });
    }

    async createPDF() {
        let options = {
            html: '<h1> On The Day Results </h1>',
            fileName: 'onthedayresults',
            directory: 'Documents',
        };

        let file = await RNHTMLtoPDF.convert(options)
        alert(file.filePath);
    }

    async componentDidMount() {
        try {
            const { navigation } = this.props;
            const cancer = await JSON.stringify(navigation.getParam('cancer', 'null'));
            const glucose = await navigation.getParam('glucose', 'null');
            const bloodPressure = await JSON.stringify(navigation.getParam('bloodPressure', 'null'));
            const response = await axios.post('http://192.168.0.39:3001/ontheday', {
                "cancer": cancer,
                "glucose": glucose,
                "bloodPressure": bloodPressure,

            })
            this.setState({ result: response.data.response })
        } catch (error) {
            console.log(error);
            this.setState({ result: "Something went wrong with the server" });
        }
    }

    render() {
        let display;
        if (this.state.result == null) {
            display = <ActivityIndicator size="large" color="white" />;
        } else {
            display = <Text style={styles.resultText}> {this.state.result} </Text>
        }

        return (
            <ScrollView style={styles.scrollColor}>
                <View style={styles.container}>
                    <Text style={styles.title}> On-The-Day Clinic Results: </Text>
                    {display}

                    {/*<TouchableOpacity onPress={this.createPDF}>*/}
                    {/*    <Text style={{ fontSize: 24, fontWeight: "300", color: 'white', textAlign: 'center', margin: '1%' }}> Create PDF </Text>*/}
                    {/*</TouchableOpacity>*/}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000d1a'
    },
    scrollColor: {
        backgroundColor: '#000d1a'
    },
    title: {
        fontSize: 24,
        fontWeight: "300",
        margin: '10%',
        marginTop: '50%',
        color: "white",
        textAlign: 'center',

    },
    resultText: {
        fontSize: 17,
        fontWeight: "200",
        color: "white",
        margin: '5%',

    }
});


