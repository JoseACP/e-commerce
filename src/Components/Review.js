import { Select, FormControl, VStack, ScrollView, Heading, Box, Text, Flex, Pressable, Image, HStack, Spacer, View, CheckIcon} from 'native-base'
import React, { useState } from 'react'
import Colors from '../color'
import Rating from './Rating'
import Message from './Notifications/Message'

export default function Review() {
    const [ratings, setRattings] = useState("")
  return (
    <Box my={9}>
        <Heading bold fontSize={15} mb={2}>
            REVIEW
        </Heading>
        {/* IF THERE IS NO REVIEW */}
        <Message
        color={Colors.deepGray}
        bg={Colors.main}
        bold 
        size={10}
        children={
            "NO REVIEW"
        }
        />
        {/* REVIEW */}
        <Box p={3} bg={Colors.deepestGray} mt={5} rounded={5}>
            <Heading fontSize={15} color={Colors.black}>
                User Doe
            </Heading>
            <Rating value={4}/>
            <Text mb={3}>Jan 12 2022</Text>
            <Message color={Colors.black} bg={Colors.white} size={12} children={"Kratos Nacido en Esparta (Grecia) junto con su hermano Deimos"} />
        </Box>
        {/* WRITE REVIEW */}
        <Box mt={6}>
            <Heading fontSize={15} color={Colors.black}>
                WRITE A REVIEW
            </Heading>
            <VStack space={6}>
                <FormControl>
                    <FormControl.Label
                    _text={{
                        fontSize: "12px",
                        fontWeight: "bold",
                    }}
                    >
                        Rating
                    </FormControl.Label>
                    <Select bg={Colors.subred} borderWidth={0} rounded={5} py={3} placeholder='Choose rate'
                    _selectedItem={{
                        bg:Colors.subred,
                        endIcon:<CheckIcon size={2}/>
                    }}
                    value={ratings}
                    onValueChange={(e) => setRattings(e)}

                    >
                        <Select.Item label='1 - Poor' value='1'/>
                        <Select.Item label='2 - Fair' value='2'/>
                        <Select.Item label='3 - poor' value='3'/>
                    </Select>
                    
                </FormControl>
            </VStack>
        </Box>
    </Box>
  );
}