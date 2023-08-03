import { ScrollView, Text, VStack } from 'native-base'
import React from 'react'
import { Cart, CartItem as Item } from '../../types/Cart'
import { Product } from '../../types/Product'
import CartItem from './CartItem'

type CartItemListProps = Cart & {items:Item[]}
const CartItemList:React.FC<CartItemListProps> = ({id,total,expedition,subTotal,items}) => {
  
  return (
    <VStack  mb={3}>
    <Text mx={2} fontSize={24} fontWeight={"semibold"} color={"gray.800"}>Sub-Totale : {subTotal} DT</Text>
    <ScrollView style={{flex:1}} horizontal={false} >
            {items.map(item=> (  <CartItem  item={item}  />))}
        </ScrollView>
        </VStack>
  )
}

export default CartItemList
