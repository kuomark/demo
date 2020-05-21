
import React from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function HomeDetailScreen(props) {

    // const name = props.route.params.name || 'nothing get'
    const passProps = props.route.params.passProps || 'nothing get'
    return (
        <View style={StyleSheet.absoluteFill}>
            <Text style={{ fontSize: 25, textAlign: 'center' }}>
                {passProps.Name}

            </Text>
            <Image
                source={{ uri: passProps.PicURL }}
                style={styles.thumbnail}
            />



            <ScrollView alwaysBounceVertical={true}>
                <Text>{passProps.HostWords}</Text>
                <TouchableOpacity
                    style={{ backgroundColor: '#00aeef', borderRadius: 20, width: 300, height: 40, justifyContent: 'center', margin: 20 }}
                    onPress={() => Linking.openURL('https://www.google.com.tw/maps/place/' + passProps.Coordinate)

                    }
                >
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 25 }}


                    >店家位子</Text>
                </TouchableOpacity>
            </ScrollView>



        </View>
    );
}


{/* <Text>HomeDetailScreen</Text>
<Text>{passProps.Name}</Text> */}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    MainView: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 8
    },
    seperator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    image: {
        // width: 20,
        // height: 40
        width: 40,
        height: 45
    },
    thumbnail: {


        height: 250,

    }
});
