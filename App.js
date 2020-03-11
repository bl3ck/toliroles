/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import {
    StatusBar,
    BackHandler
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';
import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen';
import RegisterScreen from './src/components/RegisterScreen';
import OnboardingScreen from './src/components/OnboardingScreen';


const App: () => React$Node = () => {
    useEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
        StatusBar.setBarStyle('light-content', true);
    },[])
    return (
      <>
        <Router>
          <Scene key="root">
            <Scene key="onboarding" title="Toliroles" component={OnboardingScreen} />
            <Scene key="login" component={LoginScreen} title="Login" />
            <Scene key="register" component={RegisterScreen} title="Register" />
            <Scene key="home" component={HomeScreen} />
          </Scene>
      </Router>
    </>
    );
};


export default App;
