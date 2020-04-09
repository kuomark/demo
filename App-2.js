import React, { useState } from 'react';
import { ImageBackground,StyleSheet, Text, View, TextInput,Button, TouchableHighlight, TouchableOpacity, Image,StackNavigator } from 'react-native';



  
export default function App() {

  const [count, setCount] = useState(0)
  
  const [State, setState] = useState(styles.container)


  const changeCount = () => {
    setCount(count + 1)
    console.log('按到changeCount按鈕了')
  }


  const printButton = () => {
    console.log('按到Button了！')
  }

  const printHighlight = () => {
    console.log('按到Highlight了！')
  }

  const printOpacity = () => {
    setCount(count + 1)
  
  }
  
  const printOpacity2 = () => {

    if(count ==0)
    {
     

    }
    else
    {

    setCount(count - 1)
    }
  }
  const printOpacity3 = () => {
    setCount(0)
   
  }
  const printOpacity4 = () => {

    console.log(State.backgroundColor)
    
    if(State.backgroundColor=='black')
    {
      setState(styles.container)
    }
    else
    {
      setState(styles2.container)
    }

  }

  return (
    
    <View style={State}>

      
      <Text style={{ height: 50, width: 300, borderRadius: 0, borderColor: 'darkgray', backgroundColor: 'white', color: 'black', fontSize: 28, textAlign: 'center' }}>計數器有{count}個</Text>
      <TouchableOpacity  style={{ backgroundColor: '#00aeef', borderRadius: 20, width: 300, height: 40, justifyContent: 'center', margin: 20 }}  onPress={() => printOpacity()}>

        { <Text style={{ color: 'white', textAlign: 'center', fontSize: 25 }}>
          加號
        </Text> }
      </TouchableOpacity>

      <TouchableOpacity style={{ backgroundColor: '#00aeef', borderRadius: 20, width: 300, height: 40, justifyContent: 'center', margin: 20 }}onPress={() => printOpacity2()}>
      
        { <Text style={{ color: 'white', textAlign: 'center', fontSize: 25 }}>
         減號
        </Text> }
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: '#00aeef', borderRadius: 20, width: 300, height: 40, justifyContent: 'center', margin: 20 }}onPress={() => printOpacity3()}>
      
      { <Text style={{ color: 'white', textAlign: 'center', fontSize: 25 }}>
      重置
      </Text> }
    </TouchableOpacity>

    <TouchableOpacity style={{ backgroundColor: '#00aeef', borderRadius: 20, width: 300, height: 40, justifyContent: 'center', margin: 20 }}onPress={() => printOpacity4()}>
    { <Text style={{ color: 'white', textAlign: 'center', fontSize: 25 }}>
      切換背景色
      
      </Text> }
    
    </TouchableOpacity>
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
  tinyLogo: {
    width: 50,
    height: 50,
  },
  textCenter: {
    color: '#fff',
    backgroundColor: 'rgba(50,50,50,0.3)',
    fontSize: 40,
  }
});
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  textCenter: {
    color: '#fff',
    backgroundColor: 'rgba(50,50,50,0.3)',
    fontSize: 40,
  }
});
