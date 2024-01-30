import { Center, Pressable, Box, Text, Image, HStack, VStack, Button, View, CheckIcon } from 'native-base'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import { SceneMap } from "react-native-tab-view"

const renderScene = SceneMap({
    first:Profile,
    second:Order,
})



export default function Tabs (){
    const layaout = useWindowDimensions()
    const [index,setIndex] = useState(0)
    const [routes] =useState([
        
    ])
  return (
    <View>
      <Text>Tabs</Text>
    </View>
  )
}

