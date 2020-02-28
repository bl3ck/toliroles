/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Button,
    StatusBar,
} from 'react-native';



import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import Onboarding from 'react-native-onboarding-swiper';
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
  
  const Done = ({ isLight, ...props }) => (
    <Button
      title={'Done'}
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

const App: () => React$Node = () => {
    return (
        <>
            <Onboarding
                DotComponent={Square}
                NextButtonComponent={Next}
                SkipButtonComponent={Skip}
                DoneButtonComponent={Done}
                titleStyles={{ color: 'blue' }} // set default color for the title
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image source={('../assets/images/circle.jpg')} />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                        titleStyles: { color: 'red' }, // overwrite default color
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

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;
