import React from "react";
import { StatusBar } from "react-native";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { Rajdhani_700Bold,Rajdhani_500Medium } from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import  { SignIn} from "./src/screens/signIn";
import {Background} from "./src/components/Background";


export default function App(){
  const [fontsLoaded]=useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
    <Background>
    <StatusBar
    barStyle="light-content"
    backgroundColor="transparent"
    translucent
    />

   <SignIn/>
   </Background>
  );
}