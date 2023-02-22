import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import CpayButton from '../components/CpayButton'
import { RootStackScreenProps } from '../types';
import { useTheme } from '../components/theme';

export default function WelcomeScreen({navigation}: RootStackScreenProps<'Welcome'>) {
    const { colors } = useTheme();
    return <View style={styles.container}>
    <Text style={styles.title}>Cpay</Text>
    <Text style={styles.title}>Wallet setup</Text>
    <Text style={styles.text} >Import an existing wallet or create a new one</Text>
    <View style={styles.button}>
        <CpayButton backgroundColor={undefined} buttonTextColor={colors.purple} disabled={false} icon={undefined} 
        title={'Import using Secret Recovery Phrase'} onPress={() => navigation.navigate('Phrase')}/>
        <CpayButton backgroundColor={colors.buttonAlternativeTextColor} buttonTextColor={undefined} disabled={false} icon={undefined} 
        title={'Create a new wallet'} onPress={() => navigation.navigate('Phrase')}/>
    </View>
    
    <Text style={[styles.text, {position:'absolute', bottom:10}]}>By proceeding, you agree to these Terms and Conditions</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center'
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
        padding:20,
        textAlign:'center'
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });