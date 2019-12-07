import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Dimensions, Image, Button, SaveAreaView, SafeAreaView, ScrollView, Alert, AsyncStorage} from 'react-native';
import { createAppContainer, NavigationBar, createSwitchNavigator, withNavigation, DrawerNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import DrawerItems from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './screens/Home';
import Preoperative from './screens/Preoperative'; 
import OnTheDay from './screens/OnTheDay';
import PreopResult from './screens/PreopResult';
import OnTheDayResult from './screens/OnTheDayResult';
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
import PerioperativeOptions from './screens/PerioperativeOptions';
import About from './screens/About';
import DiabetesCharts from './screens/DiabetesCharts';
import TensorflowModel from './tensorflow/TensorflowModel';

/**
 * This is the main app file in which all the components and screens are imported and implemented into
 * the overall app functionality. I have connected the app to the Firebase servers and databases where
 * if the user is found on the database, the user will be authenticated and taken to the Homepage.
 * Different navigators are used to construct this app and help with the UI/UX and smooth navigation
 * between screens.
 * A drawer navigator is used to navigate between the main screens whilst the Tab navigator is used to select
 * between the Pre-operative clinic and On-the-day clinic. Both navigators have been nested into the
 * stack navigator to create a fairly complex navigation system. Headers have also been customised appropriately
 * for each individual screen. The whole thing is working under the App Container which allows the user
 * to navigate throughout the app to begin with.
 */

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

logout = () => {

  Alert.alert(
    'Alert',
    'Are you sure you want to log out?',
    [
      {
        text: 'Yes',
        onPress: () => AsyncStorage.clear()
          .then(() => this.navigation.navigate('Login'))
          .then(console.log('Signed out')).catch((err) => console.log(err)),
        style: 'cancel'
      },
      {
        text: 'No',
        onPress: () => { return null },

      },
    ],
    { cancelable: false },
  );
}


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



const MyApp = createDrawerNavigator({

  Loading: {
    screen: Loading,
  },
  Home: {
    screen: Home,
    navigationOptions: {
      
      headerTitle: 'Home',
      title: 'Home',
      drawerIcon: ({ tintColor }) => <Icon name = "home" size = {25} color = {tintColor} />
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      headerTransparent: false,
      title: 'About',
      drawerIcon: ({ tintColor }) => <Icon name="question-circle" size={25} color={tintColor} />
    }
  },
  Booking: {
    screen: Booking,
    navigationOptions: {
      headerTitle: 'On-Call',
      headerTransparent: true,
      title: 'Patient Search',
      drawerIcon: ({ tintColor }) => <Icon name="medkit" size={25} color={tintColor} />
    }
  },
  PerioperativeOptions: {
    screen: PerioperativeOptions,
    navigationOptions: {
      headerTitle: 'Perioperative Assessment',
      title: 'Perioperative Assessment',
      drawerIcon: ({ tintColor }) => <Icon name="stethoscope" size={25} color={tintColor} />
    }
  },
  // DiabetesCharts: {
  //   screen: DiabetesCharts,
  //   navigationOptions: {
  //     headerTitle: 'Other Features',
  //     title: 'Other Features',
  //     drawerIcon: ({ tintColor }) => <Icon name="line-chart" size={25} color={tintColor} />
  //   }
  // },
  Settings: {
    screen: Settings,
    navigationOptions: {
      headerTransparent: false,
      header: null, 
      drawerIcon: ({ tintColor }) => <Icon name="gear" size={25} color={tintColor} />
    }
  },


  
    
});

const bottomTab = createBottomTabNavigator({
    
    // Booking: {
    //   screen: Booking,
    //   navigationOptions: {
    //     headerTitle: 'On-Call',
    //     title: 'On-Call'
    //   }
    // },
    Preoperative: {
      screen: Preoperative,
      navigationOptions: {
        headerTitle: 'Pre-Op Clinic',
        title: 'Pre-Op Clinic'
      }
    },
    OnTheDay: {
      screen: OnTheDay,
      navigationOptions: {
        headerTitle: 'On-The-Day Clinic',
        title: 'On-The-Day'
      }
    },
    // Regression: {
    //   screen: Regression,
    //   navigationOptions: {
    //     headerLeft: null,
    //     headerTitle: 'Display',
    //     title: 'Display'
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
            title = "Pre-operative"
            headerTitle = "Pre-operative"
            icon = <Icon name="heartbeat" size={25} color={tintColor} />
            break;

          case "OnTheDay":
            title = "On The Day"
            headerTitle = "On The Day"
            icon = <Icon name = "stethoscope" size = {25} color = {tintColor} />
            break;

          case "TensorflowModel":
            title = "Model"
            icon = <Icon name = "pie-chart" size = {25} color = {tintColor} />
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
        
        headerLeft: <TouchableOpacity style={{ marginLeft: 15, marginTop: 3 }} onPress={() => navigation.toggleDrawer()}><Icon name="bars" style={{}} size={24} /></TouchableOpacity>,
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
        headerTitle: "Pre-Operative Result",
        headerStyle: {
          backgroundColor: '#fafafa',
        }
      }
    },
    OnTheDayResult: {
      screen: OnTheDayResult, 
      navigationOptions: {
        headerTitle: "On-The-Day Result",
        headerStyle: {
          backgroundColor: '#fafafa',
        }
      }
    },
    Regression: {
      screen: Regression,
      navigationOptions: {
        headerTitle: 'Graph',
        title: 'Graph'
      }
    },
    TensorflowModel: {
      screen: TensorflowModel,
      navigationOptions: {
        headerTitle: 'Model',
        title: 'Model'
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
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    margin: 16,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .87)',
  },
  iconContainer: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
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
