import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button,Image,TouchableOpacity } from 'react-native';

export default function HomeDetailScreen(props) {

    


    
    const name = props.route.params.name || 'nothing get'
    return (
        <View style={styles.container}>
            {/* <Text>HomeDetailScreen</Text>
            <Button
                title="go back"
                onPress={() => props.navigation.pop()}
            /> */}
            {/* <Text>{name}</Text>
            <Button
                title='change first page food'
                onPress={() => props.route.params.functionA('apple')}
            /> */}
         <View style={StyleSheet.absoluteFill}>
         <Image
                style={{flex:1, width:null, height:null}}
                source={{uri: 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/11/01/realtime/7013168.jpg&x=0&y=0&sw=0&sh=0&exp=3600'}}
            />
                 <Image
                style={{flex:1, width:null, height:null}}
                source={{uri: 'https://im.marieclaire.com.tw/s805c452h100b0/assets/mc/202003/5E5FF31D346951583346461.jpeg'}}
            />
                       <Image
                style={{flex:1, width:null, height:null}}
                source={{uri: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/r6uexhqlhtame2ez3lrv/%E5%85%B1%E4%B9%98%E5%9F%8E%E5%B8%82%E4%BA%A4%E9%80%9A%E9%98%BF%E9%87%8C%E5%B1%B1-%E5%98%89%E7%BE%A9%E9%AB%98%E9%90%B5%E7%AB%99%E5%98%89%E7%BE%A9%E7%81%AB%E8%BB%8A%E7%AB%99.jpg'}}
            />
         </View>
         <TouchableOpacity
        
        onPress={() => props.navigation.pop()}
        style={{ backgroundColor: '',  width: 60, height: 40, justifyContent: 'center', margin: 20,top:250 }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 25 }}>
         返回
        
        </Text>
      
      </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
