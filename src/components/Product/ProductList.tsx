import { VStack,Text, ScrollView } from 'native-base'
import React from 'react'
import { trendingData } from '../../TestData/ProductListItems'
import ProductItem from './ProductItem'
interface ProductListProps {
    title:string,
    items:any[]
}

const ProductList:React.FC<ProductListProps> = ({title,items}:ProductListProps) => {
    
  return (
    <VStack mb={3}>
        <Text fontSize={24} fontWeight={"semibold"} color={"gray.800"}>{title}</Text>
       
        <ScrollView style={{flex:1}} horizontal={true} >
            {items.map(item=> (  <ProductItem item={item}  />))}
        </ScrollView>
    </VStack>
  )
}

export default ProductList
