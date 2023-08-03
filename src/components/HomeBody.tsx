import { Flex, HStack, ScrollView } from 'native-base'
import React from 'react'
import FilterButton from './Search/FilterButton'
import SearchBar from './Search/SearchBar'

const HomeBody = ({children}:any) => {
  
  return (
    <Flex backgroundColor={"white"} height={"100%"} borderRadius={20}  m={2} direction='column'   paddingY={7}>
       <HStack p={2} mb={4} w={"100%"} justifyContent={"space-between"} >
       <SearchBar width={"80%"} />
       <FilterButton />
       </HStack>
       <ScrollView  mb={10}>
       {children}
       </ScrollView>
       
    </Flex>
  )
}

export default HomeBody
