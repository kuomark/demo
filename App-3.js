import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Alert,Linking  } from 'react-native';

export default function App() {

  const [validCode, setValidCode] = useState('')

  const getNumber = () => {
    if (validCode === '1234') {
      Alert.alert(
        '輸入正確',
        '',
        [
          {text: '輸入正確,連結', onPress: () => Linking.openURL('http://yahoo.com.tw')},  
          {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},    
        ],
        { cancelable: false }
      )
    } else {
      return <Text style={{ color: 'red' }}>輸入錯誤</Text>
    }
  }

  
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on my great app!</Text> */}
      <TextInput
        maxLength={4}
        style={{ height: 50, width: 300, borderRadius: 0, borderColor: 'darkgray', backgroundColor: 'white', color: 'black', fontSize: 28, textAlign: 'center' }}
        onChangeText={(text) => setValidCode(text)}
        keyboardType={'numeric'}
        value={validCode}
        secureTextEntry={true}
        autoFocus={true}

      />

      {getNumber()}

      {/* {validCode === '1234' ? <Text style={{ color: 'yellow' }}>輸入成功</Text> : <Text style={{ color: 'red' }}>請輸入密碼</Text>} */}

  

      <TouchableOpacity style={{ backgroundColor: '#00aeef', borderRadius: 20, width: 300, height: 40, justifyContent: 'center', margin: 20 }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 25 }}>
          Enter
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
