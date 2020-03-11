import React, { useState, useEffect } from 'react'
import RoundInput from '../commons/RoundInput'
import RoundBtn from '../commons/RoundBtn'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();
import { 
    View,
    Text,
StyleSheet,
Image,
ActivityIndicator,
} from 'react-native'

import { post } from '../utils/http'
import { Actions } from 'react-native-router-flux';

function LoginScreen(props) {
    const [name, setName] = useState("")
    const [ password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [processing, setProcessing] = useState(false)
    useEffect(() => {
        //clear the error when user is editing the form  
        setError(null)
    },[name, password])
    onPress = () => {
        if(name && password){
            setProcessing(true)
            const body={
                name, password
            }
            // make request
            post('login', body)
            .then((data) => {
                // it was succesful save user tokens to local storage and go away to the home page.
                setProcessing(false)
                console.warn(data)
                Actions.home()
            })
            .catch(e => {
                setProcessing(false)
                setError(e.getMessage())
            })
        }
        else{
            setError("Invalide Username and or password")
            return;
        }

    }
    return (
        <View >
        <View style ={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.logoStyle}
                    source={require('../assets/images/icon.png')}
                />
            </View>
            <View style={styles.loginForm}>
                <View style = {styles.userIcon}>
                    <FontAwesome
                        name="user"
                        color="#808080"
                        size={25}
                    />
                </View>
                <View>
                    <RoundInput 
                    onChangeText={(text) => setName(text)} 
                    placeholder="User Name"
                    value={name}
                    autoFocus
                    returnKeyType='next'
                    />
                    {processing && <ActivityIndicator />}
                    <RoundInput 
                    secureTextEntry={true}  
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    returnKeyType='done'
                    />
                    {error && <View style={styles.errStyle}>
                        <Text >{error}</Text>
                        </View>
                    }
                    <RoundBtn onPress={onPress} text="Sign In" />
                </View>
                <Text style={styles.loginText}>Or Sign in With</Text>
                    <View style={styles.socialSection}>
                    <FontAwesome
                        name="facebook"
                        color="#808080"
                        size={25}
                    />
                    <FontAwesome
                        name="twitter"
                        color="#808080"
                        size={25}
                    />
                    <FontAwesome
                        name="google"
                        color="#808080"
                        size={25}
                    />
                    </View>

            </View>
        </View>
        </View>

    )
}
export default LoginScreen;
const styles = StyleSheet.create({

    container:{
        backgroundColor: '#ff009e',
        height: 350,
        borderBottomLeftRadius:50,
        borderBottomRightRadius: 50,
        borderRadius:0,
    },
    loginForm:{
        marginTop: 30,
        backgroundColor:'white',
        borderRadius: 15,
        borderWidth: 0.5,
        margin: 40,
        borderColor: '#ddd',
        shadowColor: '#696969',
        shadowOffset: { width: 3, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 7,
        elevation: 20,
    },
    userIcon: {
        alignItems: 'center',
        padding: 5,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        marginTop: 10

    },

    logoStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 0,
        height: 100,
        width: 100,
    },
    loginText:{
        alignSelf: 'center'
    },
    socialSection: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
    },
    errStyle:{
        backgroundColor: 'red',
        padding: 10,
        margin: 20,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        color: 'white',
        fontSize: 14,
    },
    footer: {
        bottom: 75,
        position: 'relative',

    }
})