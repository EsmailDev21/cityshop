import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { IconButton, Input } from "native-base";
import React, { useState } from "react";
import { APIURL } from "../../APIURL";
import { getProducts, setProduct, setProducts } from "../../redux/product/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks/hooks";
interface SearchBarProps {
  width: string;
}
const SearchBar: React.FC<SearchBarProps> = ({
  width
}) => {
  const [query,setQuery] = useState("")
  const products = useAppSelector(getProducts);
  const dispatch = useAppDispatch()
  const handler = (query:string) => {
    dispatch(setProducts(products.filter(item=>item.name.includes(query))))
  }
  const reinitProducts =async () => {
    const res = await axios.get(`${APIURL}/product`)
    dispatch(setProducts(res.data))
  }
  return (
    <Input
      value={query}
      onChangeText={(text) => {
        setQuery(text);
        handler(query);
      }}
      focusOutlineColor={"indigo.800"}
      bgColor="white"
      onBlur={()=>reinitProducts()}
      borderRadius={20}
      width={width}
      placeholder={"recherche..."}
      rightElement={
        <IconButton
          onPress={() => handler(query)}
          icon={<Ionicons name="ios-search-outline" color="gray" size={18} />}
        />
      }
    />
  );
};

export default SearchBar;
