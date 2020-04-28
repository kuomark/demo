import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { image } from './HomeScreen';

export default function HomeDetailScreen(props) {

    // const name = props.route.params.name || 'nothing get'
    const passProps = props.route.params.passProps || 'nothing get'

    const getNumber = () => {
        if (passProps.note === '0') {
            return <Image source={require('../../assets/img/1.jpg')} style={styles.image} />

        }
        else if (passProps.note === '1') {
            return <Image source={require('../../assets/img/2.jpg')} style={styles.image} />
        }
        else {
            return <Image source={require('../../assets/img/3.jpg')} style={styles.image} />
        }

    }




    return (
        <View style={styles.container}>
            {getNumber()}


            <Text>HomeDetailScreen</Text>


            <Text>{passProps.note}

            </Text>






            {/* <Button
                title="go back"
                onPress={() => props.navigation.pop()}
            />
            <Text>{name}</Text>
            <Button
                title='change first page food'
                onPress={() => props.route.params.functionA('apple')}
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
