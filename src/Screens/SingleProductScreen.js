import React, { useState } from 'react'
import { ScrollView, Heading, Box, Text, Flex, Pressable, Image, HStack, Spacer} from 'native-base'
import Colors from '../color'
import Rating from '../Components/Rating'
import Buttone from '../Components/Buttone'
import NumericInput from "react-native-numeric-input"
import Review from '../Components/Review'

function SingleProductScreen() {
  const [value, setvalue] = useState(0)
  return (
  <Box safeArea flex={1} bg={Colors.white}>
    <ScrollView px={5} showsVerticalScrollIndicator={false}>
      <Image source={require("../../assets/images/1.png")} alt='Image' w="full" h={300} resizeMode='contain' />
      <Heading bold fontSize={15} mb={2} lineHeight={22}>
      Air Jordan Legacy 312 Low
      </Heading>
      <Rating value={4}/>
      <HStack space={2} alignItems="center" my={5}>
        <NumericInput 
        value={value} 
        totalWidth={140}
        totalHeight={30}
        iconSize={25}
        step={1}
        maxValue={15}
        minValue={0}
        borderColor={Colors.deepGray}
        rounded
        textColor={Colors.black}
        iconStyle={{ color: Colors.white}}
        rightButtonBackgroundColor={Colors.main}
        leftButtonBackgroundColor={Colors.main}
         />
         <Spacer/>
         <Heading bold color={Colors.black} fontSize={19}>
          $400
         </Heading>
      </HStack>
      <Text lineHeight={24} fontSize={12}>
      Kratos Nacido en Esparta (Grecia) junto con
       su hermano Deimos, quien seria secuestrado 
       por una profecía que decía que un guerrero 
       marcado derrocaría el Olimpo. Tras crecer, 
       se convertiría en un general conocido por 
       sus métodos violentos, que se encargaría de
        liderar multitud de guerras con el objetivo 
        de que el nombre de su hogar sea reconocido
         y glorificado en todo el mundo.
      </Text>
      <Buttone bg={Colors.main} color={Colors.white} mt={10}>
        ADD TO CART
      </Buttone>
      {/* REVIEW */}
      <Review/>
    </ScrollView>
  </Box>
  )
}

export default SingleProductScreen
