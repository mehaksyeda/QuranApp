import React from "react";
import {Text,View, TouchableOpacity,SafeAreaView,FlatList, Image} from 'react-native'
import Card from "../component/Card";
import Header from "../component/Header";
import styles from "../style/styles";
const Home=({navigation})=>{
    

  return (
    <SafeAreaView  >
      <View style={styles.container}>
      <Header
      title={"Quran"}/>
      <View style={{backgroundColor:"white", height:200, flex:1, marginTop:5, borderRadius:8, borderColor:"#105278",borderWidth:2, alignItems:"center",justifyContent:"space-evenly", flexDirection:"row"}}>
     
        <Image source={require("../assest/quran(1).png")} resizeMode="contain" style={{ height:"100%",
        width:"30%",
        alignSelf:"flex-start"}}/>
         <View style={{alignSelf:"center"}}>
        <Text style={styles.englishName}>Surah:114</Text>
        <Text style={styles.englishName}>Ayah:6,666</Text>
        <Text style={styles.englishName}>Sajdah:14</Text>
        </View>
       

      </View>
     
      

        <View style={{flexDirection:"column", margin:22,marginTop:40,alignItems:"center"}}>
          <View style={{flexDirection:"row", height:200, width:"100%",marginRight:20}}>
          <TouchableOpacity onPress={()=>{navigation.navigate("Quran",{identifier:"quran-uthmani", name:"Quran",type:"false"})}}>
            <Card
            icon={require("../assest/quran.png")}
            title={"Quran"}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("Audio")}}>
            <Card
             icon={require("../assest/audio.png")}
             title={"Audio"}/>
             </TouchableOpacity>
            
          </View>
          <TouchableOpacity onPress={()=>{navigation.navigate("Languages")}} style={{height:200,marginTop:14}}>
          <Card
           icon={require("../assest/translation.png")}
           title={"Translation"}/>
           </TouchableOpacity>
          
          
          
        

        </View>
        </View>
    
    </SafeAreaView>
  );

}
export default Home;