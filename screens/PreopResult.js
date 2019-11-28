import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Keyboard, TouchableOpacity, Button, ActivityIndicator, ScrollView, TouchableHighlight} from 'react-native';
import axios from 'axios';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

export default class PreopResult extends Component {
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
            html: '<h1> Pre-Op Results </h1>',
            fileName: 'preopresults',
            directory: 'Documents',
        };

        let file = await RNHTMLtoPDF.convert(options)
        alert(file.filePath);
    }

    async componentDidMount() {
        try {
            const { navigation } = this.props;
            const patient = await JSON.stringify(navigation.getParam('patient', 'null'));
            const temp = await navigation.getParam('temp', 'null');
            const levels = await JSON.stringify(navigation.getParam('levels', 'null'));
            const response = await axios.post('http://localhost:3000/preoperative', {
                "patient": patient,
                "temp": temp,
                "levels": levels,
                
            })
            this.setState({result: response.data.response})
            } catch (error) {
                console.log(error);
                this.setState({result: "Something went wrong with the server"});
            }
        }

        render() {
            let display;
            if (this.state.result == null) {
                display = <ActivityIndicator size = "large" color = "white" />;
            } else {
                display = <Text style = {styles.resultText}> {this.state.result} </Text>
            }

            return (
                <ScrollView style = {styles.scrollColor}>
                <View style = {styles.container}>
                    <Text style = {styles.title}> Pre-Operative Clinic Results: </Text>
                    {display}

                <TouchableOpacity onPress = {this.createPDF}>
                <Text style = {{fontSize: 24, fontWeight: "300", color: 'white', textAlign: 'center', margin: '1%'}}> Create PDF </Text>
                </TouchableOpacity>
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


