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
      <Stack.Screen name="農村地方美食小吃特色料理" component={HomeScreen} />
      <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} options={{ title: '詳細說明' }} />
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
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} options={{ title: 'My Detail2' }} />
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
        initialRouteName='農村地方美食小吃特色料理'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
            let iconName
            if (route.name == '農村地方美食小吃特色料理 ') {
              iconName = focused ? 'ios-trophy' : 'ios-information-circle-outline'
              // return <Image
              //   source={{ uri: 'https://lh3.googleusercontent.com/proxy/7VBk5ax9dZkCXzOS3jkQ5pySVjcFDA_76gW0N_kvh_bHF7vSRk-zt4Cc9rSWRBRIZ8QMIcZjMB1RVFiJOtXXqnqcHMO6nFoAfADvKSLGbqqU89bA6bZ0Vwq6hBqryQ' }}
              //   style={{ width: 30, height: 30 }}
              // />
            } else if (route.name == 'Settings') {
              iconName = focused ? 'ios-options' : 'ios-list'
            }
            return <Ionicons name={iconName} size={25} color={color} />

          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name="農村地方美食小吃特色料理" component={MyHomeStack} />
        {/* <Tab.Screen name="Settings" component={MyProfileStack} /> */}
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
