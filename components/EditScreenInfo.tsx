import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import Colors from '../constants/Colors';
import { CpayIcon } from './CpayIcon';
import { useTheme } from './theme';

export default function EditScreenInfo({ path }: { path: string }) {
  const {colors} = useTheme()

  return (
    <View style = {{backgroundColor:colors.brandingColor, borderRadius:30, paddingTop: 10, padding: 10, position:'absolute', bottom:-20}}>
      <Text
          style={[styles.getStartedText, {marginTop:50,}]}>
          Payment List
        </Text>
      <View style={styles.getStartedContainer}>

        <CpayIcon name='credit-card' color='#00C603' type='entypo' title={'Credit'} />
        <CpayIcon name='money-bill' color='#0C3BF3' type='font-awesome-5' title={'Bill'} />
        <CpayIcon name='local-grocery-store' color='#EC01E7' type='material' title={'Merchant'} />
        <CpayIcon name='more' color='#6802ED' type='material-community' title={'More'} />

      </View>
      <Text
          style={styles.getStartedText}>
          Promo & Discount
        </Text>
      
      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
        <View style={styles.getStartedContainer}><Image source={require('../assets/images/Card.png')} style={{width:300,}}/></View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 40,
    marginVertical: 10,
    flexDirection: 'row',
    backgroundColor: Colors.light.background
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 20,
    marginVertical: 10,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
