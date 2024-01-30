import { StatusBar } from 'expo-status-bar';
import CartScreen from './src/Screens/CartScreen';
import { NativeBaseProvider, Text, Box } from "native-base";

export default function App() {
  return(
    <NativeBaseProvider>
      <CartScreen/>
    </NativeBaseProvider>
  );
}


