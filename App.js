import { StatusBar } from 'expo-status-bar';
import SingleProductScreen from './src/Screens/SingleProductScreen';
import { NativeBaseProvider, Text, Box } from "native-base";

export default function App() {
  return(
    <NativeBaseProvider>
      <SingleProductScreen/>
    </NativeBaseProvider>
  );
}


