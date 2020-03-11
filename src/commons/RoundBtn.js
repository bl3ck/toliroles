import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import colors from '../styles/colors'
function RoundBtn(props) {
    const { onPress } = props;

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.text}>{props.text.toUpperCase()}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderRadius: 25,
        marginVertical: 10,
        height: 45,
        borderWidth: 2,
        borderColor: colors.primaryColor,
        paddingHorizontal: 50,
        paddingVertical: 10,
        margin: 35,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: colors.primaryColor,
        fontWeight: 'bold',
        // fontFamily: 'Avenir'
    }
});

export default RoundBtn