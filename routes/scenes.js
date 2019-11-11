import React from "react";
import { Action, Scene } from "react-native-router-flux";
import HomeContainer from "./Home/containers/HomeContainer";

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="home" component="HomeContainer" title="home" initial />

    </Scene>
);