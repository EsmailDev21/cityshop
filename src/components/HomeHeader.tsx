import { Ionicons } from '@expo/vector-icons'
import { View,IconButton,Text ,HStack, Avatar, Flex} from 'native-base'
import React from 'react'

const HomeHeader = ({title}) => {
  return (
    <Flex backgroundColor={"white"} borderRadius={20} shadow={"0"} m={2} direction='row' alignItems={"center"} justifyContent={"space-between"} padding={5}>
      <IconButton icon={<Ionicons name="menu-outline" size={18} color="gray" />} />
      <Text fontSize={18} fontWeight={"semibold"}>{title}</Text>
      <HStack alignItems={"center"} space={2}>
      <IconButton icon={<Ionicons name="cart-outline" size={18} color="gray" />} />
      <Avatar size={"xs"} bg="green.500" source={{
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }}>
        AJ
      </Avatar>
      </HStack>
    </Flex>
  )
}

export default HomeHeader
