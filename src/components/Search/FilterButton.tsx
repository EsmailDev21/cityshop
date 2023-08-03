import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  Modal,
  ScrollView,
  Text,
} from "native-base";
import React, { useEffect, useState } from "react";
import { APIURL } from "../../APIURL";
import { setCategories } from "../../redux/product/categroiesSlice";
import { getProducts, setProducts } from "../../redux/product/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks/hooks";
import { categories } from "../../TestData/CategoriesData";
import { Category } from "../../types/Category";

const FilterButton = () => {
  const [categoriesItems, setCategoriesItems] = useState(categories);
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const products = useAppSelector(getProducts)
  const dispatch = useAppDispatch()
  const fetchCategories = async () => {
    const res = await axios.get(`${APIURL}/category`)
    setCategoriesItems(res.data)
  }
  const fetchChildren = async (id:string) => {
    const res = await axios.get(`${APIURL}/category/parent/${id}`)
    setCategoriesItems(res.data)
  }
  const filterProducts = async (categId:string) => {
     const res = await axios.get(`${APIURL}/product/category/${categId}`)
     dispatch(setProducts(res.data))
  }
  useEffect(() => {
    if (showModal === false) {
      fetchCategories()
    }
  },[showModal]);
  console.log(selected);
  return (
    <>
      <IconButton
        onPress={() => setShowModal(true)}
        variant={"solid"}
        borderRadius={"full"}
        colorScheme={"indigo"}
        icon={<Ionicons size={24} name="filter-outline" color={"white"} />}
      />
      ;
      <Modal  isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Categories</Modal.Header>
          <Modal.Body>
            <ScrollView>
              {categoriesItems.map((item) => (
                <Button
                  onPress={() => {
                    filterProducts(item.id)
                    fetchChildren(item.id);
                    if (categoriesItems.length != 0) {
                      setSelected(item);
                    } else {
                      setShowModal(false);
                    }
                  }}
                  variant={"solid"}
                  colorScheme={"white"}
                  leftIcon={
                    <IconButton
                      icon={
                        <Ionicons
                          name={
                         
                               "chevron-down"
                          }
                        />
                      }
                    />
                  }
                >
                  <Text color="indigo.500">{item.label}</Text>
                </Button>
              ))}
            </ScrollView>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default FilterButton;
