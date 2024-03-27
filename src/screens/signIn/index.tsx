import React from "react";
import {
   View,
   Text,
   TextInput,
   Image, 
  } from "react-native";

  import { ButtonIcon} from "../../components/ButtonIcon";
  import IllustrationImg from "../../assets/illustration.png";


import { styles } from "./style";

export  function SignIn(){
  return(
    <View style={styles.container}> 
     

      <Image source={IllustrationImg}
       style={styles.image}
       resizeMode="stretch"
       />
       <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{"\n"}
          e organize suas  {"\n"}
          Jogatina{"\n"}
        </Text>
        <Text style={styles.subtitle}>Crie Grupos Para jogar seus Games Favoritos {`\n`} Com seus amigos </Text>

        <ButtonIcon 
        title="Entrar com Discord" 
        activeOpacity={0.7}
        />
        
        

        </View>
   </View>
      
  )
}