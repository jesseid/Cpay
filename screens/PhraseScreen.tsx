import React from 'react'
import {Text, StyleSheet, View, TextInput} from 'react-native'
import CpayButton from '../components/CpayButton'
import { useTheme } from '../components/theme';
import Colors from '../constants/Colors';

export default function PhraseScreen() {
    const {colors} = useTheme()
    return <View style={styles.container}>
    <Text style={styles.title}>Cpay</Text>
    <View style={styles.index}>
        <View style={styles.circle}>
            <Text style = {styles.text}>1</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.circle}>
            <Text style = {[styles.text, {color:colors.grey}]}>2</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.circle}>
            <Text style = {styles.text}>3</Text>
        </View>
    </View>
    <Text style={styles.title}>Create password</Text>
    <Text style={[styles.text, {margin:20}]}>This password will unlock your Cpay wallet {"\n"} only on this device.</Text>
    <TextInput style={styles.input} textContentType="password" placeholder="password" secureTextEntry={true} onChangeText={(text)=>getPassword(text)}></TextInput>
    <View style={styles.button}>
        <CpayButton backgroundColor={undefined} buttonTextColor={undefined} disabled={false} icon={undefined} 
        title={'Create a new wallet'} onPress={undefined}/>
    </View>
    
    <Text style={[styles.text, {position:'absolute', bottom:10}]}>By proceeding, you agree to these Terms and Conditions</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center'
    },
    circle: {
        width:30,
        height:30,
        borderRadius: 30,
        borderColor:Colors.light.blue,
        borderWidth:3,
    },
    button: {
        position:'absolute',
        bottom:100,
    },
    title: {
      fontSize: 25,
      paddingTop:40,
      fontWeight: 'bold',
      textAlign:'center'
    },
    text: {
        textAlign:'center',
    },
    separator: {
      height: 3,
      width: 100,
      backgroundColor:Colors.light.blue
    },
    index: {
        marginVertical:10,
        flexDirection:'row',
        alignItems:'center'
    },
    input: {
        borderWidth:3,
        borderColor:Colors.light.background,
        backgroundColor:Colors.light.background,
    }
  });

function getPassword(text: string): string {
    return text
}
