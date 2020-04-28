import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button,Image,TouchableOpacity } from 'react-native';

export default function ProfileDetailScreen() {

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
            source={{uri: 'https://data.photo-ac.com/data/thumbnails/6e/6e5e30acbfa3b8df69846a1f0223cab6_t.jpeg'}}
        />
             <Image
            style={{flex:1, width:null, height:null}}
            source={{uri: 'https://data.photo-ac.com/data/thumbnails/a1/a1559386646b160a508a6dc131e0091e_t.jpeg'}}
        />
                   <Image
            style={{flex:1, width:null, height:null}}
            source={{uri: 'https://data.photo-ac.com/data/thumbnails/cb/cb690850cfc05e7354ad0531a7fa186c_t.jpeg'}}
        />
     </View>
     {/* <TouchableOpacity
    
    onPress={() => props.navigation.pop()}
    style={{ backgroundColor: '',  width: 60, height: 40, justifyContent: 'center', margin: 20,top:250 }}>
    <Text style={{ color: 'white', textAlign: 'center', fontSize: 25 }}>
     返回
    
    </Text>
  
  </TouchableOpacity> */}
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
