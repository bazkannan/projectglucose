import React, { Component, PropTypes } from "react";
import { Router } from "react-native-router-flux";
import { Provider } from "react-redux";
import scenes from "../routes/scenes";


export default class AppContainer extends Component {


    render() {
        return (
            <Provider store = {this.props.store}>
                
            </Provider>
        );
    }
}
