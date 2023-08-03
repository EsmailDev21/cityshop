import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import axios from 'axios';
import { Box, Button, Checkbox, FlatList, Flex, FormControl, HStack, Input, Modal, ScrollView, Stack, Text, TextArea, VStack, WarningOutlineIcon } from 'native-base'
import React, { useState } from 'react'
import { ListRenderItemInfo } from 'react-native';
import { APIURL } from '../../APIURL';
import { getCart, getCartItems } from '../../redux/cart/cartSlice';
import { getProducts } from '../../redux/product/productSlice';
import { useAppSelector } from '../../redux/reduxHooks/hooks';
import { Product } from '../../types/Product';

const CheckoutForm = () => {
    const [showModal, setShowModal] = useState(false);
    const cartItems = useAppSelector(getCartItems);
    const cart= useAppSelector(getCart);
    const prods = useAppSelector(getProducts)
    const [nom,setNom] = useState("")
    const [prenom,setPrenom] = useState("")
    const [nomEnter,setNomEnter] = useState("")
    const [pays,setPays] = useState("")
    const [region,setRegion] = useState("")
    const [streetNum,setStreetNum] = useState("")
    const [streetName,setSteetName] = useState("")
    const [appartement,setAppartement] = useState("")
    const [city,setCity] = useState("")
    const [postalCode,setPostalCode] = useState("")
    const [tel,setTel] = useState("")
    const [email,setEmail] = useState("")
    const [createAcc,setCreateAcc] = useState(false)
    const [isExternal,setIsExternal] = useState(false)
    const [extnom,setextNom] = useState("")
    const [extprenom,setextPrenom] = useState("")
    const [extnomEnter,setextNomEnter] = useState("")
    const [extpays,setextPays] = useState("")
    const [extregion,setextRegion] = useState("")
    const [extstreetNum,setextStreetNum] = useState("")
    const [extstreetName,setextSteetName] = useState("")
    const [extappartement,setextAppartement] = useState("")
    const [cextity,setextCity] = useState("")
    const [extpostalCode,setextPostalCode] = useState("")
    const [exttel,setextTel] = useState("")
    const [extemail,setextEmail] = useState("")
    const [notes,setNotes] = useState("")
    const calculateSubTotalAndTotal = (items:Product[]) => {
        let subTotal = 0;
        items.forEach(item=>{
            subTotal+= item.price
        });
        return {
            subTotal:subTotal,
            total:subTotal+35
        }
    }
    const cartId = localStorage.getItem("cartId")
    const submit = async () => {
    
         axios.post(`${APIURL}/customer`,{
            name:nom,
            surname:prenom,
            adress:streetName+", "+streetNum+", "+city+", "+region+", "+postalCode,
            city,
            region,
            country:pays,
            phoneNumber:parseInt(tel)
        }).then(async res=>{
            await axios.post(`${APIURL}/facturation`,{
                cartId,
                nomEnter,
                streetNum,
                streetName,
                postalCode,
                appartement,
                customerId:res.data.id
            })
         })
    }
  return (
     
        <ScrollView w="100%" >
        <FormControl isRequired>
          <Stack mx="4">
            <FormControl.Label>Nom</FormControl.Label>
            <Input value={nom} onChangeText={text=>setNom(text)} borderRadius={"full"} focusOutlineColor="indigo.800" type="text" defaultValue="" placeholder="Nom" />
            
          </Stack>
        </FormControl>
        <FormControl isRequired>
        <Stack mx="4">
        <FormControl.Label>Prénom</FormControl.Label>
            <Input value={prenom} onChangeText={text=>setPrenom(text) }borderRadius={"full"} focusOutlineColor="indigo.800" type="text" defaultValue="" placeholder="Prénom" />
            </Stack>
            </FormControl>
            <FormControl >
        <Stack mx="4">
        <FormControl.Label>Nom de l'entreprise(facultatif)</FormControl.Label>
            <Input value={nomEnter} onChangeText={text=>setNomEnter(text)} borderRadius={"full"} focusOutlineColor="indigo.800" type="text" defaultValue="" placeholder="Nom de l'entreprise" />
            </Stack>
            </FormControl>
            <FormControl isRequired>
        <Stack mx="4">
        <FormControl.Label>Pays/Région</FormControl.Label>
            <Input value={pays} onChangeText={text=>setPays(text)} borderRadius={"full"} focusOutlineColor="indigo.800" type="text" defaultValue="" placeholder="Pays" />
            <Input value={region} onChangeText={text=>setRegion(text)} borderRadius={"full"} focusOutlineColor="indigo.800" type="text" defaultValue="" placeholder="Région" />
            </Stack>
            </FormControl>
            <FormControl isRequired>
        <Stack mx="4">
        <FormControl.Label>Nom et numéro de rue</FormControl.Label>
            <HStack mb={3} space={"5%"}>
            <Input value={streetName} onChangeText={text=>setSteetName(text)} borderRadius={"full"} focusOutlineColor="indigo.800" type="text" width={"65%"} defaultValue="" placeholder="Nom de rue" />
            <Input value={streetNum} onChangeText={text=>setStreetNum(text)} borderRadius={"full"} focusOutlineColor="indigo.800" type="text" width={"30%"} defaultValue="" placeholder="Numéro" />
            </HStack>
            <Input borderRadius={"full"} focusOutlineColor="indigo.800" type="text" width={"100%"} defaultValue="" placeholder="Bàtiment, appartement, lot etc...(facultatif)" />
            </Stack>
            </FormControl>
            <FormControl isRequired>
        <Stack mx="4">
        <FormControl.Label>Ville</FormControl.Label>
            <Input value={city} onChangeText={text=>setCity(text)} borderRadius={"full"} focusOutlineColor="indigo.800" type="text" defaultValue="" placeholder="ville" />
            </Stack>
            </FormControl>
            <FormControl >
        <Stack mx="4">
        <FormControl.Label>Région/Département</FormControl.Label>
            <Input borderRadius={"full"} focusOutlineColor="indigo.800" type="text" defaultValue="" placeholder="Région/département" />
            </Stack>
            </FormControl>
            <FormControl isRequired>
        <Stack mx="4">
        <FormControl.Label>Code postal</FormControl.Label>
            <Input value={postalCode} onChangeText={text=>setPostalCode(text)} borderRadius={"full"} focusOutlineColor="indigo.800" type="text" defaultValue="" placeholder="" />
            </Stack>
            </FormControl>
            <FormControl isRequired>
        <Stack mx="4">
        <FormControl.Label>Téléphone</FormControl.Label>
            <Input value={tel} onChangeText={text=>setTel(text)} borderRadius={"full"} focusOutlineColor="indigo.800" type="text" leftElement={<Text alignSelf={"center"} m={2} fontSize={14} color="gray.500">+216</Text>} defaultValue="" placeholder="" />
            </Stack>
            </FormControl>
            <FormControl isRequired>
        <Stack mx="4">
        <FormControl.Label>Email</FormControl.Label>
            <Input value={email} onChangeText={text=>setEmail(text)} borderRadius={"full"} focusOutlineColor="indigo.800" type="text" defaultValue="" placeholder="your-email@example.com" />
            </Stack>
            </FormControl>
            <Checkbox.Group mx="4" accessibilityLabel="choose values">
      <Checkbox value="one" borderRadius={"full"} colorScheme="indigo" my={2}>
        Créer un compte?
      </Checkbox>
      <Checkbox borderRadius={"full"} colorScheme="indigo" value="two">Expédier à une adresse différente ?</Checkbox>
    </Checkbox.Group>
    <FormControl >
          <Stack mx="4">
            <FormControl.Label>Nom</FormControl.Label>
            <Input borderRadius={"full"} focusOutlineColor="indigo.800" type="text" defaultValue="" placeholder="Nom" />
            
          </Stack>
        </FormControl>
        <FormControl >
        <Stack mx="4">
        <FormControl.Label>Prénom</FormControl.Label>
            <Input borderRadius={"full"} focusOutlineColor="indigo.800" type="text" defaultValue="" placeholder="Prénom" />
            </Stack>
            </FormControl>
            <FormControl >
        <Stack mx="4">
        <FormControl.Label>Nom de l'entreprise(facultatif)</FormControl.Label>
            <Input borderRadius={"full"} focusOutlineColor="indigo.800" type="text" defaultValue="" placeholder="Nom de l'entreprise" />
            </Stack>
            </FormControl>
            <FormControl >
        <Stack mx="4">
        <FormControl.Label>Pays/Région</FormControl.Label>
            <Input borderRadius={"full"} focusOutlineColor="indigo.800" type="text" defaultValue="" placeholder="Pays/Région" />
            </Stack>
            </FormControl>
            <FormControl >
        <Stack mx="4">
        <FormControl.Label>Nom et numéro de rue</FormControl.Label>
            <HStack mb={3} space={"5%"}>
            <Input borderRadius={"full"} focusOutlineColor="indigo.800" type="text" width={"65%"} defaultValue="" placeholder="Nom de rue" />
            <Input borderRadius={"full"} focusOutlineColor="indigo.800" type="text" width={"30%"} defaultValue="" placeholder="Numéro" />
            </HStack>
            <Input borderRadius={"full"} focusOutlineColor="indigo.800" type="text" width={"100%"} defaultValue="" placeholder="Bàtiment, appartement, lot etc...(facultatif)" />
            </Stack>
            </FormControl>
            <FormControl >
        <Stack mx="4">
        <FormControl.Label>Ville</FormControl.Label>
            <Input borderRadius={"full"} focusOutlineColor="indigo.800" type="text" defaultValue="" placeholder="ville" />
            </Stack>
            </FormControl>
            <FormControl >
        <Stack mx="4">
        <FormControl.Label>Région/Département</FormControl.Label>
            <Input borderRadius={"full"} focusOutlineColor="indigo.800" type="text" defaultValue="" placeholder="Région/département" />
            </Stack>
            </FormControl>
            <FormControl >
        <Stack mx="4">
        <FormControl.Label>Code postal</FormControl.Label>
            <Input borderRadius={"full"} focusOutlineColor="indigo.800" type="text" defaultValue="" placeholder="" />
            </Stack>
            </FormControl>
            <FormControl >
        <Stack mx="4">
        <FormControl.Label>Téléphone</FormControl.Label>
            <Input borderRadius={"full"} focusOutlineColor="indigo.800" type="text" leftElement={<Text alignSelf={"center"} m={2} fontSize={14} color="gray.500">+216</Text>} defaultValue="" placeholder="" />
            </Stack>
            </FormControl>
            <FormControl >
        <Stack mx="4">
        <FormControl.Label>Email</FormControl.Label>
            <Input borderRadius={"full"} focusOutlineColor="indigo.800" type="text" defaultValue="" placeholder="your-email@example.com" />
            </Stack>
            </FormControl>
            <FormControl >
        <Stack mx="4">
        <FormControl.Label>Notes de commande (facultatif)</FormControl.Label>
            <TextArea borderRadius={20} focusOutlineColor="indigo.800" type="text" defaultValue="" placeholder="Commentaires concernant votre commande, ex: consignesde livraison." autoCompleteType={undefined} />
            </Stack>
            </FormControl>
            <FormControl >
        <Stack mx="4">
        <Button onPress={() => setShowModal(true)} my={10} variant={"outline"} colorScheme={"indigo"} borderRadius="full" leftIcon={<Ionicons stylz={{marginRight:20}} name="checkmark-outline" size={24} color="#4f46e5"  />} >Valider</Button> 
       
        </Stack>
            </FormControl>
        <Modal borderRadius={20} isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Order Review</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
            <Text fontSize={24} fontWeight="semibold" color={"gray.900"}>Produits</Text>
            <FlatList data={cartItems} renderItem={(item=>{
                return (<Flex width={"100%"} direction='row' flex={1} alignItems={"center"} justifyContent="space-between" >
                    <Text fontSize={18} fontWeight="semibold" color={"gray.800"}>{prods.find(prod=>prod.id===item.item.productId).name}</Text>
                    <Text fontSize={18} fontWeight="semibold" color={"gray.400"}>{prods.find(prod=>prod.id===item.item.productId).price} DT</Text>
                </Flex>)
            })}  />
<HStack space={5}>
                    <Text fontSize={18} fontWeight="semibold" color={"gray.800"}>Sous-totale</Text>
                    <Text fontSize={18} fontWeight="semibold" color={"gray.400"}>{cart.subTotal} DT</Text>
                    </HStack>
                    <HStack space={5}>
                    <Text fontSize={18} fontWeight="semibold" color={"gray.800"}>Expédition</Text>
                    <Text fontSize={18} fontWeight="semibold" color={"gray.400"}>Forfait: {cart.expedition} DT</Text>
                    </HStack>
                    <HStack space={5}>
                    <Text fontSize={18} fontWeight="semibold" color={"gray.800"}>Totale</Text>
                    <Text fontSize={18} fontWeight="semibold" color={"gray.400"}>{cart.total} DT</Text>
                </HStack>
            </VStack>
           


          </Modal.Body>
          <Modal.Footer>
            <Button.Group display={"flex"} alignItems="center" justifyContent={"space-between"} w="100%">
            <Button onPress={() => setShowModal(true)} my={10} variant={"outline"} colorScheme={"indigo"} borderRadius="full" leftIcon={   <MaterialCommunityIcons stylz={{marginRight:20}} name="pail-remove-outline" size={24} color="#4f46e5"  />} >Annuler</Button> 
              <Button onPress={() => {
                submit()
                setShowModal(false)
              }} my={10} variant={"solid"} colorScheme={"indigo"} borderRadius="full" leftIcon={<MaterialIcons stylz={{marginRight:20}} name="delivery-dining" size={24} color="white"  />} >Commander</Button> 
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
            </ScrollView>
      

  )
}

export default CheckoutForm
