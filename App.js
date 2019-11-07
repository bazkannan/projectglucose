import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight} from 'react-native';
import { createAppContainer, NavigationBar } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './components/Header';
import Home from './screens/Home';
import Preoperative from './screens/Preoperative'; 
import OnTheDay from './screens/OnTheDay';
import PreopResult from './screens/PreopResult';
import Login from './components/Login';
import Signup from './components/Signup';

export default class App extends React.Component {

  render() {
    return (
      <AppContainer />
      
    );
  }
}

// #800000

const AppNavigator = createStackNavigator({

  Login: {
    screen: Login,
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
  Signup: {
    screen: Signup,
    navigationOptions: {
      headerTransparent: true,
      headerTitle: 'Sign Up',
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
  Home: {
    screen: Home, 
    navigationOptions: {
      headerTitle: 'FastAid',
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
    Home: Home,
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
            icon = <Icon name="home" size={25} color={tintColor} />
            break;

          case "Preoperative":
            icon = <Icon name="left" size={25} color={tintColor} />
            break;

          case "PreopResult":
            icon = <Icon name = "right" size = {25} color = {tintColor} />
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

const RootStack = createStackNavigator (
  { 
    LoginScreen: Login, 
    SignupScreen: Signup,
    Homepage: Home, 
      Tabs: {
        screen: bottomTab,
        navigationOptions: {
          header: null
        }
      }
  },
  {
    initialRouteName: 'Login', defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#1289A7'
        }
    }
  }
);
  
const AppContainer = createAppContainer(AppNavigator);

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
