import { Center, Pressable, Box, Text, Image, HStack, VStack, Button, View, CheckIcon } from 'native-base'
import React from 'react'
import { SwipeListView } from "react-native-swipe-list-view"
import products from '../data/Products'
import Colors from '../color'
import { FontAwesome } from '@expo/vector-icons';

const Swiper = () => (
    <SwipeListView
    rightOpenValue={-50}
    previewRowKey={0}
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products}
    renderItem={renderItems}
    renderHiddenItem={HiddenItems}
    showsVerticalScrollIndicator={false}
    />
)

const renderItems = (data) =>(
    <Pressable>
        <Box ml={6} mb={3}>
            <HStack 
            alignItems="center" 
            bg={Colors.white} 
            shadow={1} 
            rounded={10} 
            overflow="hidden"
            >
                <Center 
                w="25%" 
                bg={Colors.deepGray}>
                    <Image 
                    source={{uri: data.item.image}} 
                    alt={data.item.name} 
                    w="full" 
                    h={24}
                    resizeMethod='contain'
                    />    
                </Center>
                <VStack w="60%" px={2} space={2}>
                    <Text isTruncated color={Colors.black} bold fontSize={14}>
                        {data.item.name}
                    </Text>
                    <Text bold color={Colors.lightBlack}>${data.item.price}</Text>
                </VStack>
                <Center>
                    <Button bg={Colors.main} 
                    _pressed={{bg:Colors.main}}
                    _text={{
                        color: Colors.white
                    }}>
                        5
                    </Button>
                </Center>
            </HStack>
        </Box>
    </Pressable>
)

const HiddenItems = () =>(
    <Pressable 
    w={50} 
    roundedTopRight={10} 
    roundedBottomRight={10} 
    h='88%' 
    ml='auto' 
    justifyContent="center" 
    bg={Colors.red}
    >
        <Center 
        alignItems='center' 
        space={2}
        >
            <FontAwesome 
            name='trash' 
            size={24} 
            color={Colors.white}/>
        </Center>
    </Pressable>
)



const CartItems = () => {
  return (
    <Box mr={6}>
        <Swiper/>
    </Box>
  )
}

export default CartItems

// Arreglar la parte del icono de la basura se queda tarabado y solo se muestra con un 14% del boton de borrar