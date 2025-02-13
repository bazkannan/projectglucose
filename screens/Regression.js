import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, AsyncStorage } from 'react-native'
import { VictoryBar, VictoryLine, VictoryChart, VictoryPie, VictoryTheme } from "victory-native";

/**
 * This page displays a chart which shows the correlation between glucose and age. The dataset
 * is taken from this source: https://www.kaggle.com/johndasilva/diabetes
 * This screen the user can see the relationship between glucose levels and age which can help
 * them to analyse and predict the likelihood of diabetes in a patient.
 * The data is taken from the dataset and hardcoded into the graph.
 */

export default class Regression extends Component {
    static navigationOptions = {
        title: 'Linear Regression',
        headerTitle: 'Linear Regression',
        headerStyle: { backgroundColor: '#179bbd' },
        headerTitleStyle: { color: 'white' }
    };
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { first: 50, second: 148 },
                { first: 31, second: 85 },
                { first: 32, second: 183 },
                { first: 21, second: 89 },
                { first: 33, second: 137 },
            ],
        };
        
    }

    render() {
        this.state.data.forEach((element) => {
            if (element.first === 1) {
                element.first = 'First'
                return element.first
            }
            if (element.first === 2) {
                element.first = 'Second'
                return element.first
            } else {
            return;
        }
        });

        return (
            <ScrollView style = {styles.container}>
                <View style={styles.container}>
                    <Text style={{ fontSize: 15, textAlign: 'center', color: '#109bad', marginTop: 15 }}> Glucose & Age Correlation </Text>
                    <Text style={{ color: '#585759', marginLeft: 5, top: 55 }}> Glucose Levels </Text>
                    <Text style={{ color: '#585759', marginRight: 0, top: 310, left: 335 }}> Age </Text>

                    <VictoryChart theme={VictoryTheme.material}>
                        <VictoryLine
                            style={{
                                data: { stroke: "#c43a31" },
                                parent: { border: "1px solid #ccc" }
                            }}
                            data={this.state.data}
                            x="Age"
                            y="Glucose"
                        
                        />
                    </VictoryChart>
                    
                    <Text style={{ fontSize: 12, textAlign: 'center', color: '#109bad', marginBottom: 15 }}> Dataset: https://www.kaggle.com/johndasilva/diabetes </Text>

                    </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000d1a'
    },
    forecastBox: {
        backgroundColor: "#0059b3",
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 1,
        borderColor: 'white',
    },
    text: {
        flex: 1,
        fontSize: 15,
        
        color: 'white',
        marginLeft: 15,
        marginBottom: 10,
        marginTop: 10,
    },
    amount: {
        flex: 1,
        color: '#000000',
        fontSize: 15,
        
        marginRight: 20,
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'right',
    },
});