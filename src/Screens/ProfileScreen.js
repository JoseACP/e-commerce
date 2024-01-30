import React from 'react'
import { Center, Heading, Pressable, Box, Text, Image, HStack, VStack, Button, View, CheckIcon } from 'native-base'
import Colors from '../color'


function ProfileScreen() {
  return (
    
    <Center bg={Colors.black} pt={10} pb={6}>
      <Image 
        source={{
          uri: "https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"
        }}
        alt='profile'
        w={24}
        h={24}
        resizeMethod='cover'
      />
      <Heading bold fontSize={15} isTruncated color={Colors.white}>
        Admin pepe
      </Heading>
      <Text italic fontSize={10} color={Colors.white}>
        Joined Dec 2023
      </Text>

    </Center>
    
  )
}

export default ProfileScreen
