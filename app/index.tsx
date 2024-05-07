import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

const Welcome = () => {
  return (
    <SafeAreaView  className='h-full'>
        <ScrollView contentContainerStyle={{
          height: "100%",
        }}>
          <View>
          <Text className='text-3xl'>Hellloooo 999789</Text>
          <Link href="otpVerification">verification</Link>
          </View>
        </ScrollView>
    </SafeAreaView>
    
  )
}

export default Welcome;