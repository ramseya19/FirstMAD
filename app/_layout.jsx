import { StyleSheet, Text, useColorScheme, View } from 'react-native'

import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'
// import  Logo from '../assets/icon.png'


const Rootlayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light



  return (
        <>
        <StatusBar value= "auto"/>
        <Stack screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title
          }}>
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />

            
            <Stack.Screen name="index" options={{ title:'Home' }} />
            {/* <Stack.Screen name="about" options={{ title:'' }} />
            <Stack.Screen name="contact" options={{ title:'Contact', headerShown: false }} /> */}
        </Stack>
        </>

  )
}

export default Rootlayout

const styles = StyleSheet.create({})