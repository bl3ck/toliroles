/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import {
    View,
    Image,
    Button,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Onboarding from 'react-native-onboarding-swiper';
import { Actions } from 'react-native-router-flux'
const Square = ({ isLight, selected }) => {
    let backgroundColor;
    if (isLight) {
        backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    } else {
        backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
    }
    return (
        <View
            style={{
                width: 6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor,
            }}
        />
    );
};

const backgroundColor = isLight => (isLight ? 'blue' : 'lightblue');
const color = isLight => backgroundColor(!isLight);
const Skip = ({ isLight, skipLabel, ...props }) => (
    <Button
        title={'Skip'}
        buttonStyle={{
            backgroundColor: backgroundColor(isLight),
        }}
        containerViewStyle={{
            marginVertical: 10,
            width: 70,
        }}
        textStyle={{ color: color(isLight) }}
        {...props}
    >
        {skipLabel}
    </Button>
);

const Next = ({ isLight, ...props }) => (
    <Button
        title={'Next'}
        buttonStyle={{
            backgroundColor: backgroundColor(isLight),
        }}
        containerViewStyle={{
            marginVertical: 10,
            width: 70,
            backgroundColor: backgroundColor(isLight),
        }}
        textStyle={{ color: color(isLight) }}
        {...props}
    />
);

const OnboardingScreen = (props) => {
    
    //effect to run an onboard the user
    useEffect(() =>{

        getData = async () => {
            try {
                const value = await AsyncStorage.getItem('alreadyInstalled')
                if (value !== null) {
                    // value previously stored(app was installed already) check for login here
                    //for now just go to login
                    Actions.login()
                }
                else{
                    //first time installing app create the item and allow the flow to onboard the user..
                    storeData();
                }
            } catch (e) {
                // error reading value //
            }
        }

        storeData = async () => {
            try {
                await AsyncStorage.setItem('alreadyInstalled', 'true')
            } catch (e) {
                // saving error
            }
        }

        getData();

    }, [])
    return (
        <>
            <Onboarding
                DotComponent={Square}
                NextButtonComponent={Next}
                SkipButtonComponent={Skip}
                onDone={() => Actions.login()}
                onSkip={() => Actions.login()}

                // titleStyles={{ color: '#722431' }} // set default color for the title
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image source={('../assets/images/circle.jpg')} />,
                        title: 'Build a Better You!',
                        subtitle: 'Toastmasters International can help you improve your communication and build leadership skills',
                        // titleStyles: { color: '#722431' }, // overwrite default color
                    },
                    {
                        backgroundColor: '#fe6e58',
                        image: <Image source={('./images/square.png')} />,
                        title: 'The Title',
                        subtitle: 'This is the subtitle that sumplements the title.',
                    },
                    {
                        backgroundColor: '#999',
                        image: <Image source={('./images/triangle.png')} />,
                        title: 'Triangle',
                        subtitle: "Beautiful, isn't it?",
                    },
                ]}
            />
        </>
    );
};


export default OnboardingScreen;
