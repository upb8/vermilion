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
import {createStackNavigator, createAppContainer,} from 'react-navigation';



class HomeScreen extends Component {

  static navigationOptions = {
    header: null
  }

  render() { 
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#F0FFF0"
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
        <Text>Loading Map</Text>
        
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
        backgroundColor: "#F0FFF0", 
      },
      headerTintColor: "#00BFFF",
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        color: "#00BFFF",
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
    backgroundColor:"#F0FFF0"
  },

  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: "#00BFFF",
    fontFamily: "Pacifico-Regular"
  },

  login: {
    fontFamily: "DancingScript-Regular",
    fontSize: 30,
    color: "#FF1493",
    textAlign: 'center'
  },
  input: {
    width: "90%",
    backgroundColor: "#FFFAF0",
    padding: 15,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "90%"
  },
  userButton: {
    backgroundColor: "#FAE5D3",
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
