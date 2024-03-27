import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
       
    },
    Image:{
        width:"100%",
        height: 360
    },
    content:{
        marginTop:-40,
        paddingHorizontal:50

    },

    title:{
        color:theme.color.heading,
        textAlign:"center",
        fontSize:40,
        marginBottom:16,
        fontFamily:theme.fonts.title700
       
    },
    subtitle:{
        color:theme.color.heading,
        textAlign:"center",
        fontSize:15,
        marginBottom:64,
        
    }
   
});
