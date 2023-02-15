import React from 'react';
import { FlatList, Image, StyleSheet,
         Text,
         View } from 'react-native';
import CircularChart from '../components/CircularChart';
import { CpayIcon } from '../components/CpayIcon';
import Colors from '../constants/Colors';


export default function TabBalanceScreen() {
  const data = [50, 10, 40, 95, 8, 14, 85]
  const name:string[] = ['USDT','USDC','BTC','ETH','BNB','YFI','SOL',]
  const paths = [require('../assets/images/usdt.png'), require('../assets/images/usdc.png'), 
  require('../assets/images/btc.png'), require('../assets/images/eth.png'), require('../assets/images/bnb.png'), 
  require('../assets/images/yfi.png'), require('../assets/images/sol.png'), ]
  return (
    <FlatList ListHeaderComponent={
      <>
      <Text style={styles.title}>Total Balance {"\n\n"} $114514.00</Text>
    
    <View style={styles.card}>
    <CpayIcon name={'ios-download'} title={'Deposit'} color={''} type={'ionicon'}/>
    <CpayIcon name={'arrow-up-box'} title={'Withdraw'} color={''} type={'material-community'}/>
    <CpayIcon name={'wallet'} title={'Wallet'} color={''} type={'entypo'}/>
    </View>
    <Text style={styles.title}>Asset Allocation</Text>
    <CircularChart data={data} name={name}/>
    <View style={{height:20}}/>
      </>
    }
  
    data={data} renderItem={({item,index}) => 
    <View style={{flexDirection:'row', paddingHorizontal: 20, padding:10, }}>
          <Image source={paths[index]} style={{width:40,height:40, marginHorizontal:5}}/>
          <Text style={{textAlign:'left', paddingTop:10, width:40, marginLeft:20}}>{name[index]}   </Text>
          <Text style={{textAlign:'center', top:15, position:'absolute', right:30}}>  {item.toFixed(6)}</Text>
      </View>}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical:10,
    textAlign:'center'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 40,
    marginVertical:10,
    flexDirection: 'row',
    height: 100,
    elevation:1.5,
    borderRadius: 20,
    backgroundColor: Colors.light.background,
  }
});
