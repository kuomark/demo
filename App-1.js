import React, { useState } from 'react';
import { ImageBackground,StyleSheet, Text, View, TextInput,Button } from 'react-native';
const image = { uri: "https://reactjs.org/logo-og.png" };
  
export default function App() {

  const [validCod, setValidCode] = useState('')
  const [food, setFood] = useState('')
  
  const change = () => {
    setFood('你目前輸入的數字'+validCod)
  }

  const changeNumber = () => {
    if(validCod=='0912345678')
    {
      setFood('判斷輸入正確')
     
      
    }
    else
    {
      setFood('判斷輸入錯誤')
     
    }

   
  }

  return (
    
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      <Text style={{color: "white",fontSize: 30, fontWeight: "bold",alignItems: 'center'}} >帳號申請判斷</Text>
      <TextInput
        style={{color: "white",fontSize: 30, fontWeight: "bold",alignItems: 'center'}}
        onChangeText={(text) => setValidCode(text)}
        value={validCod}
        maxLength={10}
        placeholder='請輸入號碼'
        keyboardType={'numeric'}
        secureTextEntry={true}
        editable={true}
        autoFocus={false}
        onChange={() => change()}
      />
       <Text  style={{color: "white",fontSize: 30, fontWeight: "bold",alignItems: 'center'}}>{food}</Text>
       <Button  style={{color: "white",fontSize: 30, fontWeight: "bold",alignItems: 'center'}}
        title='確認帳號'
        onPress={() => changeNumber()}
      />
    </ImageBackground>
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold"
  }
});
