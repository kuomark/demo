import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Image } from 'react-native';

var MOCKED_DATA = [
    {
        id: '0',
        note: '0',
        date: '2020/01/28 14:00',


    },
    {
        id: '1',
        note: '1',
        date: '2020/02/02 12:00',

    },
    {
        id: '2',
        note: '2',
        date: '2020/02/17',

    },

]
export var image = [
    require('../../assets/img/1.jpg'),
    require('../../assets/img/2.jpg'),
    require('../../assets/img/3.jpg'),



]

export default function HomeScreen(props) {

    const [food, setFood] = useState('candy')
    const [dataSource, setDataSource] = useState([])

    const changeFood = (foodGet) => {
        setFood(foodGet)
    }

    useEffect(() => {
        var book = MOCKED_DATA
        setDataSource(book)
    })

    const showNoticeDetail = (cases) => {
        props.navigation.push('HomeDetailScreen', { passProps: cases })

    }

    const renderBook = (cases) => {
        return (
            <TouchableOpacity onPress={() => showNoticeDetail(cases)}>
                <View>

                    <View style={styles.MainView}>
                        <Image

                            //   source={cases.img}style={styles.image}
                            source={image[cases.id]}
                            style={styles.image}
                        />

                        <View style={{ flex: 3 }}>

                            <Text ellipsizeMode='tail' numberOfLines={3} style={{ color: 'black', fontSize: 15, marginTop: 8 }}>
                                {cases.img}
                            </Text>

                            <Text ellipsizeMode='tail' numberOfLines={3} style={{ marginTop: 8, fontSize: 13, marginBottom: 8 }}>
                                {cases.date}
                            </Text>
                        </View>
                        {/* <Image source={require('../../assets/img/ic_arrow_right.png')} style={styles.image} /> */}

                    </View>
                    <View style={styles.seperator} />

                </View>
            </TouchableOpacity>

        )

    }

    return (
        <View>
            {/* <Text>HomeScreen</Text>
            <Text>{food}</Text>
            <Button
                title='go to next page'
                onPress={() => props.navigation.push('HomeDetailScreen', { name: 'avon', functionA: (arg) => changeFood(arg) })}
            /> */}
            <FlatList
                data={dataSource}
                renderItem={cases => renderBook(cases.item)}
                keyExtracto={cases => cases.id}
                style={{ backgroundColor: 'white' }}
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
    MainView: {
        height: 60,
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
        width: 20,
        height: 40
    }
});
