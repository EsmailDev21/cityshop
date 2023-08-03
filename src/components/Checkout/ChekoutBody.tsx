import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Button, Flex, Text } from "native-base";
import React from "react";
import CheckoutForm from "./CheckoutForm";

const ChekoutBody = ({ children }) => {
  return (
    <Flex
      backgroundColor={"white"}
      height={"90%"}
      borderRadius={20}
      m={2}
      direction="column"
      paddingY={7}
    >
      <Button
        my={10}
        variant={"solid"}
        colorScheme={"indigo"}
        borderRadius="full"
        leftIcon={
          <AntDesign
            stylz={{ marginRight: 20 }}
            name="user"
            size={24}
            color="white"
          />
        }
      >
        Connexion
      </Button>
      <Text ml="5" fontSize={32} fontWeight="semibold" color={"gray.500"}>
        Détails de facturation
      </Text>
      <CheckoutForm />
    </Flex>
  );
};

export default ChekoutBody;
