import React from 'react'
import { View, Text, Box, Image,Heading, color, VStack, Input, Button } from 'native-base'
import Colors from "../color";
import { Fontisto, AntDesign } from '@expo/vector-icons';
import { Pressable } from 'react-native';

function ResgisterScreen() {
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
          <Heading color={Colors.gray}>SING UP</Heading>
          <VStack space={5} pt="6">
            {/* Username */}
            <Input
                InputLeftElement={
                  <Fontisto name="email" size={24} color="white" />
                }
                variant="underlined"
                placeholder='Jose Antonio'
                w='70%'
                type='text'
                pl={2}
                color={Colors.gray}
                borderBottomColor={Colors.underline}
                />
            {/* Email */}
            <Input
              InputLeftElement={
                <AntDesign name="user" size={24} color="white" />
              }
              variant="underlined"
              placeholder='user@gmail.com'
              w='70%'
              type='email'
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
            Register
          </Button>
          <Pressable mt={4}>
            <Text color={Colors.deepestGray}>Login</Text>
          </Pressable>

        </Box>
    </Box>
  )
}

export default ResgisterScreen
