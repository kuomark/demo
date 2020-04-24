import React, { useState } from 'react';
import { StyleSheet, Text, View, Button,Image, TouchableOpacity,Alert,Linking   } from 'react-native';

export default function HomeScreen(props) {

    const [food, setFood] = useState('candy')

    const changeFood = (foodGet) => {
        setFood(foodGet)
    }

    return (
        <View style={styles.container}>
             <View style={StyleSheet.absoluteFill}>
             <Image
                style={{flex:1, width:null, height:null}}
                source={{uri: 'https://image.shutterstock.com/image-photo/railway-alishan-forest-recreation-area-600w-625545191.jpg'}}
            />
        </View>
        <TouchableOpacity
        
        onPress={() => props.navigation.push('HomeDetailScreen', { name: 'avon', functionA: (arg) => changeFood(arg) })}
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
