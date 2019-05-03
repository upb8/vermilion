import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import {createStackNavigator, createAppContainer, Dimensions} from 'react-navigation';
import MapView from 'react-native-maps';


class HomeScreen extends Component {

  static navigationOptions = {
    header: null
  }

  render() { 
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#00BFFF"
          barStyle="light-content"
        />
        <Text style={styles.welcome}>Vermilion</Text>
        <Text style={styles.login}>Please Login with your credentials</Text>
        <TextInput
          style = {styles.input}
          placeholder = "Username"
        />
        <TextInput
          style = {styles.input}
          placeholder = "Password"
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.userButton}
            onPress={() => this.props.navigation.navigate('Map')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.userButton}
            onPress={() => alert("Signup Works!!!")}
          >
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class MapScreen extends Component {
  static navigationOptions = {
    title: 'Vermilion',
    headerRight: <View/>
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.mapContainer}>
          <MapView
              style={styles.map}
              region={{
                latitude: 23.78825,
                longitude: 90.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
          >
          </MapView>
        </View>
        
      </View>
    );
  }
}



const RootStack = createStackNavigator (
  {
    Home: HomeScreen, 
    Map: MapScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#00BFFF", 
      },
      headerTintColor: "#FFFFFF",
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        color: "#FFFFFF",
        fontFamily: "Pacifico-Regular"
      }
    }
  },

);

const AppContainer = createAppContainer(RootStack);

type Props = {};
export default class Vermilion extends Component {

  render() {
    return (
      <AppContainer />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#00BFFF"
  },

  mapContainer: {
    height: 400,
    width: 360,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: "#FFFFFF",
    fontFamily: "Pacifico-Regular"
  },

  login: {
    fontFamily: "BreeSerif",
    fontSize: 15,
    color: "#FFF5EE",
    textAlign: 'center'
  },
  input: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "90%"
  },
  userButton: {
    backgroundColor: "#E0FFFF",
    padding: 15,
    width: "45%"
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center'
  }
}
)

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Vermilion);
