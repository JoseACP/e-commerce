import { Center, ScrollView, Heading, Box, Text, Flex, Pressable, Image, HStack, Spacer, View} from 'native-base'


export default function Message({ bg, color, children, size, bold}) {
  return (
    <Center bg={bg} p={4} rounded={5}>
        <Text color={color} fontSize={size} bold={bold}>
           {children}
        </Text>
    </Center>
  )
}