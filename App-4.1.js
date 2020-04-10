import React from 'react';
import { StyleSheet, Text, View, Linking,ImageBackground } from 'react-native';
import MyButton from './src/components/Button/MyButton'
const image = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
const supportedURL = "https://google.com";
  const printMessage = () => {
    console.log('成功了 按到按鈕了')
    Linking.openURL('https://www.taiwanlottery.com.tw/')
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      <Text></Text>
    
      <MyButton
        myTitle='點一下'
        myOnPress={() => printMessage()}
        color={'#fff'} 
        
      ></MyButton>
      
      
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
