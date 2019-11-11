import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight} from 'react-native';
import { createAppContainer, NavigationBar } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './components/Header';
import Home from './screens/Home';
import Preoperative from './screens/Preoperative'; 
import OnTheDay from './screens/OnTheDay';
import PreopResult from './screens/PreopResult';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Booking from './screens/Booking';
import * as firebase from 'firebase';

export default class App extends React.Component {

componentWillMount() {
  const config = {
    apiKey: "AIzaSyBltajktleDT461vk7OIL6_ghPj0sfa57A",
    authDomain: "perioperative-diabetes.firebaseapp.com",
    databaseURL: "https://perioperative-diabetes.firebaseio.com/",
    projectId: "perioperative-diabetes",
    storageBucket: "gs://perioperative-diabetes.appspot.com/",
    messagingSenderId: "626380421552"
  };

  firebase.initializeApp(config);
}

  render() {
    return (
      <AppContainer />
      
    );
  }
}

// #800000

const AppNavigator = createStackNavigator({

  // Login: {
  //   screen: Login,
  //   navigationOptions: {
  //     headerTransparent: true,
  //     header: false,
  //     headerStyle: {
  //       backgroundColor: '#000d1a',
  //     },
  //     headerTitleStyle: {
  //       fontWeight: 'bold',
  //       color: 'black',
  //       tintColor: 'white'
  //     }
  //   },
  // },
  // Signup: {
  //   screen: Signup,
  //   navigationOptions: {
  //     headerTransparent: true,
  //     headerTitle: 'Sign Up',
  //     headerStyle: {
  //       backgroundColor: '#fafafa',
  //       borderColor: 'black',
  //       shadowRadius: 3,
  //       tintColor: 'white',
  //       shadowOpacity: 1
  //     },
  //     headerTitleStyle: {
  //       fontWeight: 'bold',
  //       color: 'black',
  //       tintColor: 'white'
  //     }
  //   },
  // },
  Home: {
    screen: Home, 
    navigationOptions: {
      
      headerTransparent: true,
      header: false,
      headerStyle: {
        backgroundColor: '#000d1a',
      }, 
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'black',
        tintColor: 'white'
      }
    },
  }, 
  Booking: {
    screen: Booking
  },
  PreopResult: {
    screen: PreopResult,
    navigationOptions: {
      headerTitle: 'Preoperative Results',
      headerStyle: {
        backgroundColor: '#fafafa',
        borderColor: 'black',
        shadowRadius: 3,
        tintColor: 'white',
        shadowOpacity: 1
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'black',
        tintColor: 'white'
      }
    },
  },
  Preoperative: {
    screen: Preoperative,
    navigationOptions: {
      headerTitle: 'Preoperative Clinic',
      headerStyle: {
        backgroundColor: '#fafafa',
        borderColor: 'black',
        shadowRadius: 3,
        tintColor: 'white',
        shadowOpacity: 1
      }, 
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'black',
        tintColor: 'white'
      }
    },
  },
});

const bottomTab = createBottomTabNavigator({
    
    Booking: Booking,
    Preoperative: Preoperative,
    PreopResult: PreopResult
    
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        icon = <Icon name="home" size={25} />
        switch (routeName) {
          case "Home":
            title = "Home"
            icon = <Icon name="home" size={25} color={tintColor} />
            break;

          case "Booking":
            title = "Request"
            icon = <Icon name="mobile" size = {25} color = {tintColor} />
            break;

          case "Preoperative":
            title = "Diabetes"
            icon = <Icon name="heartbeat" size={25} color={tintColor} />
            break;

          case "PreopResult":
            title = "Result"
            icon = <Icon name = "info" size = {25} color = {tintColor} />
            break;
        }

        return icon;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#0652DD',
      inactiveTintColor: '#263238'
    },
  }
);

const rootStack = createStackNavigator (
  { 
//    LoginScreen: Login, 
//    SignupScreen: Signup,
    Homepage: Home, 
      Tabs: {
        screen: bottomTab,
        navigationOptions: {
          headerTitle: "FastAid",
          
        }
      }
  },
  {
 //   initialRouteName: "Home",
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#fafafa'
        }
    }
  }
);
  
const AppContainer = createAppContainer(rootStack);

AppRegistry.registerComponent("App", () => App);

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }, 
  header: {
    flex: 1,
    color: 'red'
  }
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
