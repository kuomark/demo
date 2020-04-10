import React from 'react'
import { TouchableOpacity, Text,Linking } from 'react-native'

const MyButton = props => (

    <TouchableOpacity onPress={props.myOnPress}
        style={{ backgroundColor:'black', width: 200, height: 100, borderRadius: 50, margin: 100 }}>
        <Text style={{ textAlign: 'center', lineHeight: 100, fontSize: 50, color: props.color }}>{props.myTitle}</Text>
        
    </TouchableOpacity >

)

export default MyButton