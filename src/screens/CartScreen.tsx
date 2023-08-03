import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react'
import { View,Text, Button } from 'native-base'
import HomeHeader from '../components/HomeHeader';
import CartBody from '../components/Cart/CartBody';
import CartItem from '../components/Cart/CartItem';
import { salesData, trendingData } from '../TestData/ProductListItems';
import CartItemList from '../components/Cart/CartItemList';
import { Product } from '../types/Product';
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks/hooks';
import { getCart, getCartItems, setCart } from '../redux/cart/cartSlice';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Cart, CartItem as Item } from '../types/Cart';
import { getProducts } from '../redux/product/productSlice';
import axios from 'axios';
import { APIURL } from '../APIURL';


const CartScreen = ({navigation}) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(getCart)
  const data = useAppSelector(getCartItems)
  const prods =useAppSelector(getProducts)
  const calculateSubTotalAndTotal =async  (data:Item[])=>{
    console.log(data)
    let subtotal=0;
    let total = 0;
    const cartId = window.localStorage.getItem('cartId')
    data.forEach(item=>{
      let product = prods.find(prod=>prod.id==item.productId)
      console.log(product)
      subtotal+= product.price
    })
    total = subtotal+35
    const res = await axios.patch(`${APIURL}/cart/${cartId}`,{
      total,
      subTotal:subtotal,
      expedition:total-subtotal
    })
    console.log(res.data)
    dispatch(setCart(res.data))

  }
  useEffect(
    ()=>{
      calculateSubTotalAndTotal(data)
    },[data]
  )
  
  return (
    <View height={"100%"} backgroundColor={"gray.50"}>
      <HomeHeader title={"Panier"} />
      <CartBody>
        <CartItemList  id={cart.id} subTotal={cart.subTotal} expedition={cart.expedition} items={data} total={cart.total}   />
        <Button onPress={()=>navigation.navigate("checkout")} disabled={data.length===0?true:false} borderRadius={"full"} width={"100%"}  colorScheme={"indigo"} justifyItems="space-between" leftIcon={<MaterialIcons name='delivery-dining' size={24} style={{marginRight:10}} color={"white"} />}>Paaser la commande</Button>
      </CartBody>
    
    </View>
  )
}

export default CartScreen
