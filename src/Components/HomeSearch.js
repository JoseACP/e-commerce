import { Text, HStack, Input, Pressable, Box} from 'native-base'
import React from 'react'
import Colors from '../color'
import { MaterialCommunityIcons } from '@expo/vector-icons';

function HomeSearch() {
    return (
        <HStack 
        space={3} 
        w="full" 
        px={5} 
        bg={Colors.black} 
        py={4} 
        alignItems="center" 
        safeAreaTop
        >
            <Input
            placeholder='Nike, Puma, Adidas ...'
            w="85%"
            bg={Colors.white}
            type='search'
            variant='filled'
            h={12}
            borderWidth={0}
            _focus={{
                bg: Colors.white,
            }}
            />
            <Pressable ml={3}>
            <MaterialCommunityIcons name="basket-outline" size={24} color="white" />
            <Box
            px={1}
            rounded="full"
            position="absolute"
            top={-13}
            left={2}
            bg={Colors.red}
            _text={{
                color: Colors.white,
                fontSize: "11px"
            }}
            >
            5
            </Box>
            </Pressable>
        </HStack>
    )
}

export default HomeSearch
