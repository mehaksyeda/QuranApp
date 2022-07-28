import React from "react";
import LinearGradient from 'react-native-linear-gradient';
import {View , Text, StyleSheet,Image} from 'react-native'
const Card=({icon, title})=>{
    return(
        
          <LinearGradient
  colors={['#105278', '#18313f']}
  useAngle={true}
  angle={180}
  style={styles.container}>
            <Image source={icon} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>{title}</Text>
            </LinearGradient>
        
    )
       

    

}


export default Card
const styles = StyleSheet.create({
    container: {
        flex:1,
      
     
      padding:2,
      margin:7,
      borderRadius:9,
      height:"100%",
      alignItems:"center",
    
      flexDirection:"row",
      justifyContent:"center",
    
      
      
    },
    container1: {
        flex:1,
      
      backgroundColor: "#18313f",
      padding:9,
      margin:7,
      borderRadius:4,
      height:"100%",
      alignItems:"center",
      paddingVertical:4,
      flexDirection:"row",
      justifyContent:"center"
      
    },
    title: {
        
      color: "white",
      fontSize: 25,
      fontWeight: "bold"
    },
    image:{
        height:"100%",
        width:"30%",
        alignSelf:"flex-start",
        color:"white"

    }
  });