import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileDetailScreen() {

    return (
        <View style={styles.container}>
            <Text>ProfileDetailScreen</Text>
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
