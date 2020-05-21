import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Image } from 'react-native';

var MOCKED_DATA = [
    {
        id: '1',
        note: '恭喜您！達成環島100次',
        date: '2020/01/28 14:00'
    },
    {
        id: '2',
        note: '您的會員身份認證，已經審核通過！',
        date: '2020/02/02 12:00'
    },
    {
        id: '3',
        note: '播款通知：本公司已將款項＄123456撥入到您的指定銀行帳戶',
        date: '2020/02/17'
    },
    {
        id: '4',
        note: '恭喜您！達成慢跑10公里',
        date: '2020/03/28 14:00'
    },
    {
        id: '5',
        note: '您的會員身份認證，審核通過！',
        date: '2020/04/02 12:00'
    },
    {
        id: '6',
        note: '播款通知：本公司已將款項＄66666撥入到您的指定銀行帳戶',
        date: '2020/04/17'
    },
    {
        id: '7',
        note: '恭喜您！泳渡日月潭成功！',
        date: '2020/08/28 14:00'
    },
    {
        id: '8',
        note: '溫馨小叮嚀，運動後不要忘了收操喔！',
        date: '2020/09/02 12:00'
    },
    {
        id: '9',
        note: '播款通知：本公司已將款項＄6撥入到您的指定銀行帳戶',
        date: '2020/09/17'
    },
    {
        id: '10',
        note: '恭喜您！達成騎單車111次',
        date: '2020/09/28 14:00'
    },
    {
        id: '11',
        note: '您的免費體驗來囉！',
        date: '2020/10/02 12:00'
    },
    {
        id: '12',
        note: '播款通知：本公司已將款項＄12121212212撥入到您的指定銀行帳戶',
        date: '2020/12/17'
    },

]

export default function HomeScreen(props) {

    const [food, setFood] = useState('candy')
    const [dataSource, setDataSource] = useState([])

    const changeFood = (foodGet) => {
        setFood(foodGet)
    }

    useEffect(() => {
        // var book = MOCKED_DATA
        // setDataSource(book)
        fetchData()
    })
    const fetchData = () => {
        const REQUEST_URL = 'https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvTravelFood.aspx'

        fetch(REQUEST_URL






        )
            .then((response) => response.json())
            .then((responseData) => {
                setDataSource(responseData)
            })
            .catch((err) => {
                console.log('error 是777 ', err)
            })
    }

    const showNoticeDetail = (cases) => {
        props.navigation.push('HomeDetailScreen', { passProps: cases })

    }


    const renderBook = (cases) => {
        return (
            <TouchableOpacity onPress={() => showNoticeDetail(cases)}>
                <View>

                    <View style={styles.MainView}>
                        {/* <Image/> */}
                        <Image
                            source={{ uri: cases.PicURL ? cases.PicURL : 'https://pic.pimg.tw/cc1895/1431185098-1614666523.jpg' }}
                            style={styles.thumbnail}
                        />

                        <View style={{ flex: 1 }}>

                            <Text ellipsizeMode='tail' numberOfLines={3} style={{ color: 'black', fontSize: 15, marginTop: 8 }}>
                                {cases.Name}
                            </Text>

                            <Text ellipsizeMode='tail' numberOfLines={3} style={{ marginTop: 8, fontSize: 13, marginBottom: 8 }}>
                                {/* {cases.animal_bodytype === 'MEDIUM' ? '中型' :
                                    cases.animal_bodytype === 'SMALL' ? '小型' : '大型'
                                }{"/" + cases.animal_colour + '的' + cases.animal_kind} */}
                                {cases.City}
                            </Text>
                        </View>
                        <Image source={require('../../assets/img/ic_arrow_right.png')} style={styles.image} />

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

        width: 100,
        height: 80,
        marginRight: 10
    }
});
