import { Center, Select, FormControl, VStack, ScrollView, Heading, Box, Text, TextArea, Flex, Pressable, Image, HStack, Spacer, View, CheckIcon } from 'native-base'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Buttone from "../Components/Buttone"
import Colors from '../color';

const CartEmpty = () => {
  return (
    <Box flex={1} px={4}>
        <Center h="90%" >
            <Center w={200} h={200} bg={Colors.white} rounded="full">
            <MaterialCommunityIcons name="basket-outline" size={64} color={Colors.main} />
            </Center>
            <Text color={Colors.main} bold mt={5}>
                CART IS EMPTY
            </Text>
        </Center>
        <Buttone bg={Colors.black} color={Colors.white}>
            START SHOPPING
        </Buttone>
    </Box>
  )
}

export default CartEmpty


 