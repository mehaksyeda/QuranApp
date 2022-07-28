import React from "react";
import {View , Text, StyleSheet,Image} from 'react-native'
const Header=({title})=>{
    return(
        <View style={styles.container}>
            <Image source={require("../assest/pngaaa.png")} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
       

    

}


export default Header
const styles = StyleSheet.create({
    container: {
      
      backgroundColor: "#105278",
      padding:2,
      height:70,
      alignItems:"center",
      paddingVertical:4,
      flexDirection:"row",
      justifyContent:"center"
      
    },
    title: {
        
      color: "#fdce51",
      fontSize: 25,
      fontWeight: "bold"
    },
    image:{
        height:"100%",
        width:"30%",
        alignSelf:"flex-start"

    }
  });