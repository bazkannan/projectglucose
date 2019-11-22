import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Dimensions, Image, Button, SaveAreaView, ScrollView} from 'react-native';
import { createAppContainer, NavigationBar, createSwitchNavigator, withNavigation, DrawerNavigator } from 'react-navigation';
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
import { createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import DestinationButton from './components/DestinationButton';
import { SettingsNavigation } from './components/stackNavigator';
import Settings from './screens/Settings';
import Regression from './screens/Regression';



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



// const MyNavScreen = ({ props }) => ({
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       title: 'Home'
//     }
//   },
//   Booking: {
//     screen: Booking,
//     navigationOptions: {
//       title: 'Patient'
//     }
//   },
//   Preoperative: {
//     screen: Preoperative,
//     navigationOptions: {
//       title: 'Doctor'
//     }
//   },
//   Login: {
//     screen: Login,
//     navigationOptions: {
//       title: 'Sign Out'
//     },
//   }
// });

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

// const CustomDrawerComponent = (props) => {
//   <SafeAreaView style = {{flex: 1}}>
//     <View style = {{height: 150, backgroundColor: 'white'}}>
      
//     </View>
//     <ScrollView>
//       <DrawerItems {...props} />
//     </ScrollView>
//   </SafeAreaView>
// };


// const CustomDrawerNavigation = (props) => {
//   return (
//     <SaveAreaView style = {{ flex: 1 }}>
//       <View style = {{ height: 250, 
//         backgroundColor: '#d2d2d2',
//         opacity: 0.9
//         }}>
//           <View style = {{ height: 200,
//           backgroundColor: 'green',
//           alignItems: 'center',
//           justifyContent: 'center'
//           }}>
  
//           </View>
//           <View style = {{ height: 50, 
//           backgroundColor: 'Green',
//           alignItems: 'center',
//           justifyContent: 'center'
//           }}>
//           <Text> FastAid </Text>

//           </View>
//       </View>
//       <ScrollView>
//         <DrawerItems {...props} />
//       </ScrollView>
//       <View style = {{ alignItems: 'center', 
//       bottom: 20
//       }}>
//         <View style = {{ flexDirection: 'row'}}>
//           <View style = {{flexDirection: 'column', marginRight: 15 }}>
//             <Icon name = "flask" style = {{ fontSize: 24 }}
//             onPress = {() => console.log("Tikladin")} />
//           </View>
//           <View style = {{ flexDireection: 'column' }}>
//             <Icon name = "call" style = {{ 
//               fontSize: 24 }} onPress = {() => console.log("Tikladin")} />
          
//           </View>
//         </View>
//       </View>
//     </SaveAreaView>
//   );
// }
 
// const AppDrawerNavigator = createDrawerNavigator(
//   {
//     Home: Home,
//     Settings: Settings,
//   }, 
//   {
//     hideStatusBar: true,
//     drawerBackgroundColor: 'rgba(255, 255, 255, .9)',
//     overlayColor: '#6b52ae',
//     contentOptions: {
//       activeTintColor: '#fff',
//       activeBackgroundColor: '#6b52ae',
//     },
//   }
// );

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home', 
      headerLeft: <Icon name = "bars" size = {35} onPress = {() => navigation.toggleDrawer()} />,
    })
  }
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      
      headerLeft: <Icon name="bars" size={35} onPress={() => navigation.toggleDrawer()} />,
    })
  }
});

const Root = createDrawerNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      title: 'Home'
    }
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      title: 'Settings',
    }
  }
});

const MyApp = createDrawerNavigator({

  Loading: {
    screen: Loading,
  },
  Home: {
    screen: Home,
    navigationOptions: {
      
      headerTitle: 'Home',
      title: 'Home'
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      headerTransparent: false,
      header: null
    }
  },
  
});

const bottomTab = createBottomTabNavigator({
    
    Booking: {
      screen: Booking,
      navigationOptions: {
        headerTitle: 'On-Call',
        title: 'On-Call'
      }
    },
    Preoperative: {
      screen: Preoperative,
      navigationOptions: {
        headerTitle: 'Pre-op Clinic',
        title: 'Pre-op Clinic'
      }
    },
  Regression: {
    screen: Regression,
    navigationOptions: {
      headerLeft: null,
      headerTitle: 'Display',
      title: 'Display'
    }
  },
    // Settings: {
    //   screen: Settings,
    //   navigationOptions: {
    //     headerLeft: null,
    //     headerTitle: 'Settings',
    //     title: 'Settings',
        
    //   }
    // },
   
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        icon = <Icon name="home" size={25} />
        switch (routeName) {
          case "Home":
            title = "Home"
            headerTitle = "Home"
            icon = <Icon name="home" size={25} color={tintColor} />
            break;

          case "Booking":
            title = "On-Call"
            headerTitle = "On-Call"
            icon = <Icon name="medkit" size = {25} color = {tintColor} />
            break;

          case "Preoperative":
            title = "Diabetes"
            headerTitle = "Diabetes"
            icon = <Icon name="heartbeat" size={25} color={tintColor} />
            break;

          case "PreopResult":
            title = "Result"
            icon = <Icon name = "book" size = {25} color = {tintColor} />
            break;

          case "Settings":
            title = "Settings"
            headerTitle = "Settings"
            icon = <Icon name="gear" size={25} color={tintColor} />
            break;

          case "Regression": 
          title = "Regression"
          headerTitle = "Regression"
            icon = <Icon name = "line-chart" />
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
    Loading: { screen: Loading},
    Login: { screen: Login, navigationOptions: {header: null}},
    Home: { screen: Home, navigationOptions: {}}
  }, 
  {
    initialRouteName: 'Loading'
  }
)

const rootStack = createStackNavigator (
  { 

    Login: {
      screen: Login,
      navigationOptions: {
        headerLeft: null,
        headerTransparent: true,
        header: null,
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
        header: null,
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
      
      screen: MyApp,
      navigationOptions: ({navigation}) => ({
        
        headerLeft: <TouchableOpacity style={{ marginLeft: 15, marginTop: 3 }} onPress={() => navigation.openDrawer()}><Icon name="bars" style={{}} size={24} /></TouchableOpacity>,
        headerTitle: 'FastAID',
        headerRight: <TouchableOpacity style={{ marginRight: 15, marginTop: 3 }} onPress={() => navigation.navigate('Settings')}><Icon name="gear" style={{}} size={24} /></TouchableOpacity>,
        headerTransparent: true,
        headerBackImage: false,
        headerStyle: {
          backgroundColor: '#fafafa',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'black',
          tintColor: 'white'
        }
      }),
    }, 
    // Booking: {
    //   screen: Booking,
    //   navigationOptions: {
    //     headerTransparent: true,
    //     headerStyle: {
    //       backgroundColor: 'white'
    //     }
    //   }
    // },
    PreopResult: {
      screen: PreopResult,
      navigationOptions: {
        headerTitle: "Result",
        headerStyle: {
          backgroundColor: '#fafafa',
        }
      }
    },

    
    Homepage: Home, 
      
      Tabs: {
        screen: bottomTab,
        navigationOptions: ({ navigation }) => ({
          headerTransparent: false,
          
          headerTitle: bottomTab.routeName
        }),
      },
    
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      Switch,
      gesturesEnabled: false,
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
