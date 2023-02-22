import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useTheme } from './theme';
import { Icon } from '@rneui/base';


export const CpayButton = (props:{onPress: any, backgroundColor:any, buttonTextColor:any, disabled:boolean, icon:any, title: string}) => {
    const { colors } = useTheme();
  
    let backgroundColor = props.backgroundColor ? props.backgroundColor : colors.mainColor;
    let fontColor = props.buttonTextColor || colors.buttonTextColor;
    if (props.disabled === true) {
      backgroundColor = colors.buttonDisabledBackgroundColor;
      fontColor = colors.buttonDisabledTextColor;
    }
  
    return (
      <TouchableOpacity
        style={{
          borderWidth: 0.7,
          borderColor: 'transparent',
          backgroundColor,
          minHeight: 45,
          height: 45,
          maxHeight: 45,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 16,
          flexGrow: 1,
          marginVertical:10,
        }}
        accessibilityRole="button"
        {...props}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          {props.icon && <Icon name={props.icon.name} type={props.icon.type} color={props.icon.color} />}
          {props.title && <Text style={{ marginHorizontal: 8, fontSize: 16, color: fontColor, fontWeight: '500' }}>{props.title}</Text>}
        </View>
      </TouchableOpacity>
    );
  };

export default CpayButton;