import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import HomeDetailScreen from './src/screens/HomeDetailScreen'
import ProfileDetailScreen from './src/screens/ProfileDetailScreen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyHomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
        headerBackTitle: '返回',
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="阿里山" component={HomeScreen} />
      <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} options={{ title: '阿里山圖片' }} />
    </Stack.Navigator>
  )

}

function MyProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName='Profile'
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
        headerBackTitle: '返回2',
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="日月潭" component={ProfileScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} options={{ title: '日月潭照片' }} />
    </Stack.Navigator>
  )
}

export default function App() {

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>

    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName='Home'
    //     screenOptions={{
    //       headerStyle: { backgroundColor: 'tomato' },
    //       headerBackTitle: '返回',
    //       headerTintColor: 'white'
    //     }}
    //   >
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} options={{ title: 'My Detail' }} />
    //   </Stack.Navigator>

    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='阿里山'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
            let iconName
            if (route.name == '阿里山')
            {
              // iconName = focused ? 'ios-trophy' : 'ios-information-circle-outline'
              return <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/%E5%90%88%E6%AD%A1%E7%BE%A4%E5%B3%B0.JPG/270px-%E5%90%88%E6%AD%A1%E7%BE%A4%E5%B3%B0.JPG' }}
                style={{ width: 30, height: 30 }}
              />
            } else if (route.name == '日月潭') 
            {
            
              return <Image
              source={{ uri: 'https://www.sunmoonlake.gov.tw/zh-tw/Content/images/index/new-8view-01.jpg' }}
              style={{ width: 30, height: 30 }}
            />
               
            }

          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name="阿里山" component={MyHomeStack} />
        <Tab.Screen name="日月潭" component={MyProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
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
