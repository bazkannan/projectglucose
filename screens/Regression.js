import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, AsyncStorage } from 'react-native'
import { VictoryBar, VictoryLine, VictoryChart, VictoryPie, VictoryTheme } from "victory-native";


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

    linearRegression(dataArray) {
		
        const second = dataArray.map(item => item.second);
        const first = dataArray.map(item => item.first);
        const slope = this.calculateSlope(first, second);

        const yIntercept = this.calculateYintercept(slope, second, first);
        const average = this.findMean(first);
        
        return yIntercept + (slope * average);

    }

    calculateSlope(x, y) {
        if (x.length !== y.length) {
            throw new Error('size of first and second should be same');
        }
       
        const meanOfx = this.findMean(x);

        const meanOfy = this.findMean(y);
        const xMinusXMean = this.subtract(x, meanOfx);
        const yMinusYMean = this.subtract(y, meanOfy);

        
        const xMinusXMeanMultiplyYMinusYMean = this.multiply(xMinusXMean, yMinusYMean);
        
        const sumOfxMinusXMeanMultiplyYMinusYMean = this.sum(xMinusXMeanMultiplyYMinusYMean);

        const xMinusXMeanSquare = this.square(xMinusXMean);
        const yMinusYMeanSquare = this.square(yMinusYMean);

        const sumOfxMinusXMeanSquare = this.sum(xMinusXMeanSquare);
        const sumOfyMinusYMeanSquare = this.sum(yMinusYMeanSquare);

        const denominator = (Math.sqrt(sumOfxMinusXMeanSquare * sumOfyMinusYMeanSquare));
        let pearsonCorrelationCoefficient = sumOfxMinusXMeanMultiplyYMinusYMean / denominator;

        if (isNaN(pearsonCorrelationCoefficient)) {
            pearsonCorrelationCoefficient = 0;
        }
   
        const standardDeviationOfx = Math.sqrt(sumOfxMinusXMeanSquare / (x.length - 1));
        const standardDeviationOfy = Math.sqrt(sumOfyMinusYMeanSquare / (y.length - 1))

        let slope = pearsonCorrelationCoefficient * (standardDeviationOfy / standardDeviationOfx);
        if (isNaN(slope)) {
            slope = 0;
        }
        return slope;
    }

    calculateYintercept(slope, second, first) {
        

        const meanOfy = this.findMean(second);
        const meanOfX = this.findMean(first);
        return meanOfy - (slope * meanOfX);

    }

    findMean(a) {
        return this.sum(a) / a.length;
    }

    subtract(a, subtractBy) {
        return a.map(num => num - subtractBy);
    }

    multiply(a, b) {
        const result = [];
        a.forEach((item, index) => {
            result[index] = item * b[index];
        });
        return result;
    }

    sum(a) {
        let total = 0;
        a.forEach(num => {
            total = total + num
        });
        return total;
    }

    square(a) {
        return a.map(item => item * item)
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
        
        const databaseData = this.state.data

        const firstAverage = this.findMean(this.state.data.map(item => item.first));
        const secondAverage = this.findMean(this.state.data.map(item => item.second));
        const secondArray = this.state.data.map(item => item.second)
        const MinimumSecond = Math.min(...secondArray);
        const MaximumSecond = Math.max(...secondArray);

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
    forecasteBox: {
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