import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TouchableHighlight, ScrollView, AppDrawerNavigator, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * This screen is mainly a way to navigate between the options of choosing between the Regression chart and the Machine Learning Tensorflow model.
 * This can be accessible from the side Drawer menu or the Home screen.
 */

export default class DiabetesCharts extends Component {
    static navigationOptions = ({ navigation }) => {
        return {

            headerTransparent: false,
            headerTitle: 'Diabetes Charts',
            navigationOptions: {
                headerVisible: true,
            },

        }
    };

    render() {
        return (
            <ScrollView style={styles.screen}>

                <View style={styles.screen}>
                    <ImageBackground
                        source={require('../assets/diabetes.jpg')}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 7,
                            top: 40,
                            opacity: '1',


                        }}
                    >
                        <View style={{ top: 230 }}>

                            <Text style={styles.title}> Other Features </Text>
                            <View style={{ marginVertical: 10, top: -30 }}>
                                <Text style={{
                                    alignItems: 'center',
                                    fontWeight: "bold",
                                    fontSize: 18,
                                    fontStyle: 'italic',
                                    textAlign: 'center',
                                    color: 'white',
                                    justifyContent: 'center',
                                    marginVertical: 10,
                                    top: 0
                                }}> Select options </Text>
                            </View>

                            <View style={{ flexDirection: 'row', padding: 10, paddingRight: 20, top: -50 }}>
                                <TouchableOpacity
                                    style={{ alignItems: 'center', backgroundColor: '#0059b3', padding: 15, borderRadius: 7, borderColor: 'white', borderWidth: 1, width: '50%', justifyContent: 'center', top: 0 }}
                                    onPress={() => this.props.navigation.navigate('Regression')}
                                >
                                    <View style={{ marginTop: 0, top: -5 }}>
                                        <Icon name="line-chart" size={25} color="white" />
                                    </View>
                                    <Text style={styles.buttonText}> Linear Regression </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => this.props.navigation.navigate('TensorflowModel')}
                                >
                                    <View style={{ marginTop: 0, top: -5 }}>
                                        <Icon name="pie-chart" size={25} color="white" />
                                    </View>
                                    <Text style={styles.buttonText}> ML Model </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
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
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bodytext: {
        fontSize: 20
    },
    choiceText: {
        fontSize: 20,
        fontWeight: "200",
        color: "black",
    },
    button: {

        alignItems: 'center',
        backgroundColor: '#0059b3',
        padding: 15,
        borderRadius: 7,
        borderColor: 'white',
        borderWidth: 1,
        width: '50%',
        justifyContent: 'center',
        top: 0,
        marginLeft: 10,
        marginRight: 10

    },
    button2: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0059b3',
        padding: 15,
        borderRadius: 7,
        borderColor: 'white',
        borderWidth: 1,
        width: '65%',
        justifyContent: 'center',
        top: 130

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        alignItems: 'center'
    },
    title: {
        alignItems: 'center',
        fontWeight: "bold",
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        justifyContent: 'center',
        marginVertical: 55,
        top: 40
    }
});