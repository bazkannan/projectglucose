import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, AsyncStorage } from 'react-native'
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";

export default class Regression extends Component {
    static navigationOptions = {
        title: 'Display',
        headerStyle: { backgroundColor: '#179bbd' },
        headerTitleStyle: { color: 'white' }
    };
    constructor(props) {
        super(props);
        this.state = {
            myKey: '',
            token: '',
            data: [
                { _id: 'Preoperative', second: 0 },
                { _id: 'OnTheDay', second: 0 },
            ],
            // data for regression
        };
        
    }

    linearRegression(dataArray) {
		/*
			y = a + bx;
			where a is y intercept
			and b is the slope
			here we have to find the value of x;
	
			slope(b) = r *sy/sx
			where
			r is the correlation coefficient
			sy is the standard deviation of data x
			sx is the standard deviation of data x
	
			a = mean(y) - b *mean(x)
		*/
        const second = dataArray.map(item => item.second);
        const first = dataArray.map(item => item.first);
        const slope = this.calculateSlope(first, second);

        const yIntercept = this.calculateYintercept(slope, second, first);
        const average = this.findMean(first);
        
        return yIntercept + (slope * average);

    }

    calculateSlope(x, y) {
        if (x.length !== y.length) {
            throw new Error('sample size of first and second should be same');
        }
        /*
            slope(b) = r *sy/sx
        where
        r is the correlation coefficient
        sy is the standard deviation of sample data x
        sx is the standard deviation of sample data x
*/
        /*
            in order to calculate Correlation Coefficient
                r = sumation ( (x-mean(x)) * (y -mean(y)) ) / underRoot( sum((x-mean(x)) ^2) * sum((y-mean(y)) ^2)
            */
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
        // standard devaition of x is  = underRoot(sum((x - meanOfx)^2) / n -1) where n is the size of array
        const standardDeviationOfx = Math.sqrt(sumOfxMinusXMeanSquare / (x.length - 1));
        const standardDeviationOfy = Math.sqrt(sumOfyMinusYMeanSquare / (y.length - 1))

        let slope = pearsonCorrelationCoefficient * (standardDeviationOfy / standardDeviationOfx);
        if (isNaN(slope)) {
            slope = 0;
        }
        return slope;
    }

    calculateYintercept(slope, second, first) {
        // a = mean(y) - b *mean(x)

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
            if (element._id === 1) {
                element._id = 'First'
                return element._id
            }
            if (element._id === 2) {
                element._id = 'Second'
                return element._id
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
                    <Text style={{ fontSize: 15, textAlign: 'center', color: '#109bad', marginTop: 15 }}> Perioperative Assessment Chart </Text>
                    <Text style={{ color: '#585759', marginLeft: 5 }}> X-Variable </Text>

                    <VictoryChart theme={VictoryTheme.material}>
                        <VictoryLine
                            style={{
                                data: { stroke: "#c43a31" },
                                parent: { border: "1px solid #ccc" }
                            }}
                            data={this.state.data}
                            x="_id"
                            y="second"
                        
                        />
                    </VictoryChart>
                    

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