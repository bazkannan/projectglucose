import React, { Component }  from 'react';
import { View, Text, StyleSheet } from 'react-native';

class HomePatient extends Component {

    componentDidMount() {
        this.props.setName();
    }

    render() {
        return (
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text> Hello {this.props.name} </Text>

        </View>
        );
    }
}

export default HomePatient;