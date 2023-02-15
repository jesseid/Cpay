import React from 'react'
import { FlatList, View, Text } from 'react-native'
import { PieChart } from 'react-native-svg-charts'

const CircularChart = (props: { name: string[], data: any[] }) => {

    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
    const sum = (arr: number[]) => arr.reduce((acc, curr) => acc + curr, 0)
    const total = sum(props.data)
    const pieData = props.data
        .filter((value: number) => value > 0)
        .map((value: any, index: any) => ({
            value,
            svg: {
                fill: randomColor(),
                onPress: () => console.log('press', index),
            },
            key: props.name[index],
        }))

    return <View style={{flexDirection:'row', flex:1, alignItems:'center', justifyContent:'space-between', paddingHorizontal:20,}}>
        <PieChart style={{ width: 150, paddingHorizontal: 0 }} data={pieData} innerRadius={'70%'} padAngle={0}/>
        <FlatList data={pieData} renderItem={({item}) => <View style={{flexDirection:'row', paddingHorizontal: 40}}>
            <View style={{width:10, height:10, backgroundColor:item.svg.fill, marginHorizontal:5, marginTop:5.5,}}/>
            <Text style={{textAlign:'left', width:40}}>{item.key}   </Text>
            <Text style={{textAlign:'center'}}>          {(item.value/total*100).toFixed(2)}%</Text>
        </View>}/> 
    </View>
}

export default CircularChart