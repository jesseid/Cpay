import { StyleSheet,
         Dimensions,
         Text,
         View, } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import { useTheme } from '@react-navigation/native';
import Colors from '../constants/Colors';
import { CpayIcon } from '../components/CpayIcon';


const { height } = Dimensions.get('window');


export default function TabHomeScreen({}: RootTabScreenProps<'TabHome'>) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avaliable Balance {"\n\n"} $0.00</Text>
      <EditScreenInfo path="/screens/TabHomeScreen.tsx" />
      <View style={styles.card}>
        <CpayIcon name={'bank-transfer'} title={'Transfer'} color={''} type={'material-community'}/>
        <CpayIcon name={'request-quote'} title={'Request'} color={''} type={'material'}/>
        <CpayIcon name={'history'} title={'History'} color={''} type={'material'}/>
        <CpayIcon name={'ticket-confirmation-outline'} title={'Voucher'} color={''} type={'material-community'}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.tint
  },
  title: {
    color: Colors.dark.text,
    height: height / 6,
    position: 'absolute',
    textAlign: "center",
    top: 50,
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    alignItems: 'center',
    marginHorizontal: 40,
    flexDirection: 'row',
    height: 100,
    elevation:1.5,
    width: "90%",
    borderRadius: 20,
    position:'absolute',
    bottom: height/2,
    backgroundColor: Colors.light.background,
  },
});
