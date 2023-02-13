import { StyleSheet,
         Dimensions,
         Text,
         View, } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import { useTheme } from '@react-navigation/native';
import Colors from '../constants/Colors';


const { height } = Dimensions.get('window');


export default function TabHomeScreen({ }: RootTabScreenProps<'TabHome'>) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avaliable Balance</Text>
      <View style={styles.card}></View>
      <EditScreenInfo path="/screens/TabHomeScreen.tsx" />
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    marginVertical: 10,
    height: 100,
    width: "90%",
    borderRadius: 20,
    backgroundColor: Colors.light.background,
  },
});
