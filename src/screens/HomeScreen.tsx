//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from "axios";
import { Spinner, View } from "native-base";
import React, { useEffect, useState } from "react";
import { APIURL } from "../APIURL";
import HomeBody from "../components/HomeBody";
import HomeHeader from "../components/HomeHeader";
import ProductList from "../components/Product/ProductList";
import { getProducts, setProducts } from "../redux/product/productSlice";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks/hooks";
import { newData, salesData, trendingData } from "../TestData/ProductListItems";
import { Product } from "../types/Product";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const allItems = useAppSelector(getProducts);
  //const [allItems, setAllItems] = useState<Product[]>([]);
  const fetchProducts = async () => {
    const response = await axios.get(`${APIURL}/product`);
    //console.log(response.data)
    dispatch(setProducts(response.data));
    //setAllItems(response.data)
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
   
    console.log(allItems);
  }, [setProducts]);
 
  return (
    <View height={"100%"} backgroundColor={"gray.50"}>
      <HomeHeader title={"Accueil"} />
      <HomeBody>
        {loading === true ? (
          <Spinner color={"indigo.600"} />
        ) : (
          <>
          <ProductList title="Trending" items={allItems} />
         <ProductList title="Trending" items={allItems.slice(0, allItems.length / 4)} />
            <ProductList title="Nouveauté" items={allItems.slice(allItems.length / 4, allItems.length / 2)} />
            <ProductList title="En promotion" items={allItems.filter((item) => item.sale === true)} />
        <ProductList title="Famille" items={ allItems.slice(allItems.length / 2, (3 * allItems.length) / 4)} />
          </>
        )}
      </HomeBody>
    </View>
  );
};

export default HomeScreen;
