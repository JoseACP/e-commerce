import React from 'react'
import { Center, Select, Button, FormControl, VStack, ScrollView, Heading, Box, Text, TextArea, Flex, Pressable, Image, HStack, Spacer, View, CheckIcon } from 'native-base'
import Colors from '../color'
import Buttone from '../Components/Buttone'
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
        {/* Buttons */}
        <Center mt={5}>
          <HStack
          rounded={50}
          justifyContent="space-between"
          bg={Colors.white}
          shadow={2}
          w="90%"
          pl={5}
          h={45}
          alignItems="center"
          >
            <Text>Total</Text>
            <Button 
            px={10} 
            h={45} 
            rounded={50} 
            bg={Colors.main}
            _text={{
              color: Colors.white,
              fontWeight: 'semibold',
            }}
            >
              $355
            </Button>
          </HStack>
        </Center>
        {/* checkout */}
        <Center px={5}>
          <Buttone bg={Colors.black} color={Colors.white} mt={10}>
            CHECK OUT
          </Buttone>
        </Center>
      </ScrollView>
    </Box>
  )
}

export default CartScreen
