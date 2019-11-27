import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, ActivityIndicator, StatusBar, Image, TouchableOpacity } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import { fetch } from '@tensorflow/tfjs-react-native';
import * as mobilenet from '@tensorflow-models/mobilenet';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as jpeg from 'jpeg-js';
import * as ImagePicker from 'expo-image-picker';

export default class TensorflowModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTfReady: false,
            isModelReady: false,
            predictions: null,
            image: null,
        };
    }

    getPermissionAsync = async() => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if (status !== 'granted') {
                alert('Sorry, the camera roll is required for this feature')
            }
        }
    }

    imageToTensor(rawImageData) {
        const TO_UINT8ARRAY = true
        const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY)
        const buffer = new Uint8Array(width * height * 3)
        let offset = 0
        for (let i = 0; i < buffer.length; i += 3) {
            buffer[i] = data[offset]
            buffer[i + 1] = data[offset + 1]
            buffer[i + 2] = data[offset + 2]

            offset += 4
        }

        return tf.tensor3d(buffer, [height, width, 3])
    }

    classifyImage = async () => {
        try {
            const imageAssetPath = Image.resolveAssetSource(this.state.image)
            const response = await fetch(imageAssetPath.uri, {}, { isBinary: true})
            const rawImageData = await response.arrayBuffer()
            const imageTensor = this.imageToTensor(rawImageData)
            const predictions = await this.model.classify(imageTensor)
            this.setState({ predictions })
            console.log(predictions)
        } catch (error) {
            console.log(error)
        }
    }

    selectImage = async () => {
        try {
            let response = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3]
            })

            if (!response.cancelled) {
                const source = { uri: response.uri }
                this.setState({ image: source })
                this.classifyImage()
            }
        } catch (error) {
            console.log(error)
        }
    }

    renderPrediction = prediction => {
        return (
            <Text key = {prediction.className} style = {styles.text}>
                {prediction.className}
            </Text>
        )
    }

    async componentDidMount() {
        await tf.ready();
        this.setState({
            isTfReady: true,
        });
        this.model = await mobilenet.load();
        this.setState({ isModelReady: true })
        console.log(this.state.isTfReady)

        this.getPermissionAsync()
    }

    render() {

        const { isTfReady, isModelReady, predictions, image } = this.state;

        return (
            <ScrollView style = {styles.container}>
            <View style = {styles.container}>
                <StatusBar barStyle = 'light-content'/>
                <View style = {styles.loadingContainer}>
                    <Text style={{ color: 'white' }}> TFJS ready? {this.state.isTfReady ? <Text> ✅ </Text> : ''}</Text>

                    <View style = {styles.loadingModelContainer}>
                        <Text style={styles.text}> ML Model loaded? </Text>
                        
                        {this.state.isModelReady ? (<Text style={styles.text}> ✅ </Text>) : (<ActivityIndicator size = 'small' /> )}
                        
                    </View>
                </View>
                <TouchableOpacity 
                    style = {styles.imageWrapper}
                    onPress = {this.state.isModelReady ? this.selectImage : undefined }> 
                    { image && <Image source = {image} style = {styles.imageContainer} />}

                    { this.state.isModelReady && !image && (
                        <Text style = {styles.transparentText}> Choose relevant image </Text>
                    )}
                    </TouchableOpacity>

                    <View style = {styles.predictionWrapper}>
                        {this.state.isModelReady && image && (
                            <Text style = {styles.text}>
                                Analysis: {predictions ? '' : 'Analysing Image...'}
                            </Text>
                        )}
                        {isModelReady &&
                        predictions &&
                        predictions.map(p => this.renderPrediction(p))}
                    </View>
                    <View style = {styles.footer}>
                        <Text style = {styles.poweredBy}>
                            Powered by: Tensorflow 
                        </Text> 
                </View>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000d1a',
        alignItems: 'center',
    },
    text: {
        fontWeight: "600",
        fontSize: 16,
        color: "white",
    },
    loadingContainer: {
        marginTop: 80,
        justifyContent: 'center'
    },
    loadingModelContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    imageWrapper: {
        width: 280,
        height: 280,
        padding: 10,
        borderColor: '#cf667f',
        borderWidth: 5,
        borderStyle: 'dashed',
        marginTop: 40,
        marginBottom: 10,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 250,
        height: 250,
        position: 'absolute',
        top: 10,
        left: 10,
        bottom: 10,
        right: 10,
    },
    predictionWrapper: {
        height: 100,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    transparentText: {
        color: '#ffffff',
        opacity: 0.7
    },
    footer: {
        marginTop: 40
    },
    poweredBy: {
        fontSize: 20,
        color: 'white',
        marginBottom: 30
    }
});