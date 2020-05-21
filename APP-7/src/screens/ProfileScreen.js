import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as StorageHelper from '../helpers/StorageHelper'

export default function ProfileScreen(props) {

    const [name, setName] = useState('')

    useEffect(() => {
        loadStorage()
        console.log('useEffect')
    }, [])

    const loadStorage = async () => {
        let nameGet = await StorageHelper.getMySetting('name')
        console.log('loadStorage')
        if (nameGet) { // if (nameGet !== null)
            setName(nameGet)
        }
    }

    const changeName = async () => {
        try {
            await StorageHelper.setMySetting('name', name)
        } catch (err) {
            console.error(err)

        }
    }

    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
            <TextInput
                maxLength={10}
                style={{ height: 50, width: 300, borderWidth: 5, borderColor: 'darkgray', backgroundColor: 'gray', fontSize: 28, textAlign: 'center', color: 'white' }}
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <Text>Hello {name}!</Text>
            {/* <Button
                title='go to profile detail screen'
                onPress={() => props.navigation.push('ProfileDetail')}
            /> */}
            <Button
                title='設定名字'
                onPress={() => changeName()}
            />
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
