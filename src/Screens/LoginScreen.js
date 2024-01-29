import React from 'react'
import { View, Text, Box, Image,Heading, color, VStack, Input, Button } from 'native-base'
import Colors from "../color";
import { Fontisto } from '@expo/vector-icons';
import { AntDesign, } from '@expo/vector-icons';
import { Pressable } from 'react-native';


function LoginScreen() {
  return (
    <Box flex={1} bg={Colors.black}>
        <Image
        flex={1}
        alt='Logo'
        resizeMode='cover'
        size="lg"
        width="full"
        source={require("../../assets/cover.png")} 
        />
        <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
        >
          <Heading color={Colors.gray}>LOGIN</Heading>
          <VStack space={5} pt="6">
            {/* Email */}
            <Input
              InputLeftElement={
                <Fontisto name="email" size={24} color="white" />
              }
              variant="underlined"
              placeholder='user@gmail.com'
              w='70%'
              pl={2}
              color={Colors.gray}
              borderBottomColor={Colors.underline}
              />
            {/* Password */}
            <Input
              InputLeftElement={
                <AntDesign name="eyeo" size={24} color="white" />
              }
              variant="underlined"
              placeholder='******'
              w='70%'
              type='password'
              pl={2}
              color={Colors.gray}
              borderBottomColor={Colors.underline}
              />


          </VStack>
          <Button
          _pressed={{
            bg: Colors.black,

          }} 
          my={30} 
          w="40%" 
          rounded={50} 
          bg={Colors.main}>
            Login
          </Button>
          <Pressable mt={4}>
            <Text color={Colors.deepestGray}>Sing up</Text>
          </Pressable>

        </Box>
    </Box>
  )
}

export default LoginScreen
