import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Dimensions, Image, Button, SaveAreaView, ScrollView} from 'react-native';
import { createAppContainer, NavigationBar, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './screens/Home';
import Preoperative from './screens/Preoperative'; 
import OnTheDay from './screens/OnTheDay';
import PreopResult from './screens/PreopResult';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Booking from './screens/Booking';
import Loading from './screens/Loading';
import AccountCreated from './screens/AccountCreated';
import * as firebase from 'firebase';
import { Header } from 'react-native-elements';
import { Left, Right } from 'native-base';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import DestinationButton from './components/DestinationButton';

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

const CustomDrawerNavigation = (props) => {
  return (
    <SaveAreaView style = {{ flex: 1 }}>
      <View style = {{ height: 250, 
        backgroundColor: '#d2d2d2',
        opacity: 0.9
        }}>
          <View style = {{ height: 200,
          backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center'
          }}>
  
          </View>
          <View style = {{ height: 50, 
          backgroundColor: 'Green',
          alignItems: 'center',
          justifyContent: 'center'
          }}>
          <Text> FastAid </Text>

          </View>
      </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
      <View style = {{ alignItems: 'center', 
      bottom: 20
      }}>
        <View style = {{ flexDirection: 'row'}}>
          <View style = {{flexDirection: 'column', marginRight: 15 }}>
            <Icon name = "flask" style = {{ fontSize: 24 }}
            onPress = {() => console.log("Tikladin")} />
          </View>
          <View style = {{ flexDireection: 'column' }}>
            <Icon name = "call" style = {{ 
              fontSize: 24 }} onPress = {() => console.log("Tikladin")} />
          
          </View>
        </View>
      </View>
    </SaveAreaView>
  );
}

const Drawer = createDrawerNavigator({
  
 Home: {
  screen: Home,
  navigationOptions: {
    title: 'Home'
  }
 },
  Booking: {
    screen: Booking,
    navigationOptions: {
      title: 'Patient'
    }
  },
  Preoperative: {
    screen: Preoperative,
    navigationOptions: {
      title: 'Doctor'
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Sign Out'
    },
  }
});

const bottomTabPreop = createBottomTabNavigator({
    
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

const Switch = createSwitchNavigator(
  {
    Loading,
    AccountCreated,
    Signup,
    Login,
    Home
  }, 
  {
    initialRouteName: 'Loading'
  }
)


const rootStack = createStackNavigator (
  { 
    // LoginScreen: Login, 
    // SignupScreen: Signup,

    Login: {
      screen: Login,
      navigationOptions: {
        headerLeft: null,
        headerTransparent: true,
        header: false,
        headerMode: null,
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
    AccountCreated: {
      screen: AccountCreated,
      navigationOptions: {
        headerLeft: null,
        headerTransparent: true,
        headerStyle: {
          backgroundColor: '#000d1a',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'black',
          tintColor: 'white'
        }
      }
    },
    Signup: {
      screen: Signup,
      navigationOptions: {
        headerTransparent: true,
        headerLeft: null,
        headerMode: 'none',
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

    Home: {
      
      screen: Home,
      navigationOptions: {
        headerLeft: <Icon name="bars" style = {{left: 15}}size = {24} onPress={() => this.props.navigation.navigate('DrawerOpen')} />,
        headerRight: <Icon name="info" style = {{right: 15}} size = {24} onPress = {() => this.props.navigation.navigate('Preoperative')}/>,
        headerTransparent: true,
        header: false,
        headerBackImage: false,
        headerTitle: "Home",
        headerStyle: {
          backgroundColor: '#fafafa',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'black',
          tintColor: 'white'
        }
      },
    }, 
    Booking: {
      screen: Booking,
      navigationOptions: {
        headerTransparent: true,
        headerStyle: {
          backgroundColor: 'white'
        }
      }
    },
    Switch,
    

    Homepage: Home, 
      
      Tabs: {
        screen: bottomTabPreop,
        navigationOptions: {
          headerTitle: "Preoperative Clinic",
        },
      }
  },
  {
    initialRouteName: "Login",
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
