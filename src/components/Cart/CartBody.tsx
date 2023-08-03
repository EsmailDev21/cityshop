import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Button, Flex, HStack, ScrollView } from 'native-base'
import React from 'react'
import { useState } from 'react'
import { useAppDispatch } from '../../redux/reduxHooks/hooks'
import SearchBar from '../Search/SearchBar'

const CartBody = ({children}:any) => {
    
  return (
    <Flex backgroundColor={"white"} height={"90%"} borderRadius={20}  m={2} direction='column'   paddingY={7}>
       <HStack p={2} mb={4} w={"100%"} justifyContent={"space-between"} >
       <SearchBar width={"100%"} handler={function (value: string): void {
                  throw new Error('Function not implemented.')
              } } query={''} setQuery={function (value: React.SetStateAction<string>): void {
                  throw new Error('Function not implemented.')
              } } />
       </HStack>
       <ScrollView  mb={10}>
       {children}
       </ScrollView>
      
    </Flex>
  )
}

export default CartBody
