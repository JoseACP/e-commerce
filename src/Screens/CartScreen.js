import React from 'react'
import { Center, Select, FormControl, VStack, ScrollView, Heading, Box, Text, TextArea, Flex, Pressable, Image, HStack, Spacer, View, CheckIcon } from 'native-base'
import Colors from '../color'
import CartEmpty from '../Components/CartEmpty'
import CartItems from '../Components/CartItems'

function CartScreen() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.subred}>
      {/* Header */}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>

      </Center>
      {/* If cart is empty
      <CartEmpty/> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
      </ScrollView>
    </Box>
  )
}

export default CartScreen
