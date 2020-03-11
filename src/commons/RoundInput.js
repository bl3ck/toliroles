import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors'

function RoundInput(props) {
    const {
        iconName,
        label,
        invalid,
        background,
    } = props

    return (
        <View style={styles.container}>
            {label ?
                <Text style={styles.label}>{label}</Text>
                : <Text></Text>
            }
            <View style={[styles.sectionStyle, invalid ? { borderWidth: 1, borderColor: "red" } : "", background ? { backgroundColor: "#f5f5f5" } : ""]}>
                {
                    iconName ?
                        <FontAwesome
                            name={iconName}
                            color="#808080"
                            size={25}
                            style={styles.inputIcon}
                        />
                        : <Text></Text>
                }
                <TextInput
                    style={{
                        flex: 1,
                        paddingRight: iconName ? 10 : 15,
                        paddingLeft: iconName ? 10 : 15,
                        fontSize: 15,
                        borderColor: 'black',
                    }}
                    {...props}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#808080"
                    blurOnSubmit
                    clearButtonMode="while-editing" //IOS
                    enablesReturnKeyAutomatically={true}  //IOS
                />
            </View>
        </View>
    )
}

//defining of the styles to be used in the button component exclusively for this classs of the object
// uncomment the section style inorder to get ride of the part that is responsible for the styles.
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
    },

    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.borderColor,
        height: 40,
        borderRadius: 25,
        paddingRight: 15,
    },

    label: {
        marginBottom: 5,
        fontWeight: '700',
        fontSize: 15,
    },

    inputIcon: {
        marginLeft: 15,
        //marginTop: 10,
    }

});

export default RoundInput;
