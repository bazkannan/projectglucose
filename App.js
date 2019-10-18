import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import Preoperative from './screens/Preoperative'; 

export default class App extends React.Component {
  render() {
    return (
      <AppContainer /> 
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home, 
  }, 
  Preoperative: {
    screen: Preoperative,
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
