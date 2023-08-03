import { View } from 'native-base'
import React from 'react'
import ChekoutBody from '../components/Checkout/ChekoutBody'
import HomeHeader from '../components/HomeHeader'

const CHeckoutScreen = () => {
  return (
    <View height={"100%"} backgroundColor={"gray.50"}>
        <HomeHeader title={"Checkout"} />
        <ChekoutBody children={undefined} ></ChekoutBody>
    </View>
  )
}

export default CHeckoutScreen
