import { Icon } from '@rneui/themed';

import { Text, View } from 'react-native';


export function CpayIcon(props: {name: string, title: string, color: string, type: string,}) {
  return <View style={{padding:10}}>
    <Icon name={props.name} color={props.color} type={props.type}/>
    <Text style={[{ fontFamily: 'space-mono' }]} >{props.title}</Text>
    </View>;
}
