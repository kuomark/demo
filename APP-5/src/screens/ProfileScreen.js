import React from 'react';
import { StyleSheet, Text, View, Button,Image, TouchableOpacity,Alert,Linking  } from 'react-native';

export default function ProfileScreen(props) {

    return (
        <View style={styles.container}>
        <View style={StyleSheet.absoluteFill}>
        <Image
           style={{flex:1, width:null, height:null}}
           source={{uri: 'https://data.photo-ac.com/data/thumbnails/5c/5cd20688e84b6174834ee969f9694ea2_t.jpeg'}}
       />
   </View>
   <TouchableOpacity
   
 
   onPress={() => props.navigation.push('ProfileDetail')}
   style={{ backgroundColor: '',  width: 60, height: 40, justifyContent: 'center', margin: 20,top:250 }}>
   <Text style={{ color: 'white', textAlign: 'center', fontSize: 25 }}>
    進入
   
   </Text>
 
 </TouchableOpacity>
   {/* <Button
           title='go to next page'
           onPress={() => props.navigation.push('HomeDetailScreen', { name: 'avon', functionA: (arg) => changeFood(arg) })}
       /> */}
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
