import { StatusBar } from 'expo-status-bar';
import LoginScreen from './src/Screens/LoginScreen';
import { NativeBaseProvider, Text, Box } from "native-base";

export default function App() {
  return(
    <NativeBaseProvider>
      <LoginScreen/>
    </NativeBaseProvider>
  );
}


