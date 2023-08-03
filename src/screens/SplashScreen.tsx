import { useFonts } from "expo-font";
import { View, Text, Flex, Image } from "native-base";
import React, { useEffect, useRef } from "react";
import { Animated , Dimensions} from "react-native";
import Loading from "../components/reusables/Loading";

const SplashScreen = ({ navigation }) => {
    const moveAnime = useRef(new Animated.Value(0)).current
    const fadeAnime = useRef(new Animated.Value(0)).current
    const showLoadingAnime = useRef(new Animated.Value(0)).current
   // const [loaded] = useFonts({
    //    "quicksand": require('../../assets/fons/Quicksand-VariableFont_wght.ttf'),
    //  });
    
      
  useEffect(
    () => {
        Animated.sequence([
            Animated.timing(moveAnime,{
                toValue:Dimensions.get("window").width,
                useNativeDriver:false,
                delay:0,
                duration:2000,

            }),
            Animated.timing(moveAnime,{
                toValue:0,
                useNativeDriver:false,
                delay:0,
                duration:2000,
                
            })
        ]).start()
        Animated.timing(fadeAnime,{
            toValue:1,
            useNativeDriver:false,
            delay:0,
            duration:2000,
            
        }).start()
        Animated.timing(showLoadingAnime,{
            toValue:1,
            useNativeDriver:false,
            delay:3000,
            duration:2000,
            
        }).start();
        setTimeout(()=>{navigation.navigate("main")},7000)
    }
  
  ,[fadeAnime,moveAnime]);
  return (
    <Flex height={"100%"} bg="white" alignItems="center" justifyContent={"center"}>
        <Image source={require("../../assets/logo.png")}/>
      <Animated.View style={{width:"100%",height:"90%",flex:1,alignItems:"center",justifyContent:"center",flexDirection:"row",marginLeft:moveAnime}}>
        <Animated.Text style={{fontSize:32,color:"#dc2626"}}>C</Animated.Text>
        <Animated.Text style={{fontSize:24,color:"#3730a3",opacity:fadeAnime}}>ity Shop</Animated.Text>
        
        
      </Animated.View>
      <Animated.View style={{width:"100%",height:"50px",flex:1,alignItems:"center",justifyContent:"center",flexDirection:"row",opacity:showLoadingAnime}}>
      <Loading />
      </Animated.View>
    </Flex>
  );
};

export default SplashScreen;
