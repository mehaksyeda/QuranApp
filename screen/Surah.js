import React from "react";
import {Text,View, TouchableOpacity,SafeAreaView,FlatList, Image,ActivityIndicator} from 'react-native'
import SoundPlayer from 'react-native-sound-player'
import Header from "../component/Header";
import styles from "../style/styles";
const Surah=({ route, navigation })=>{
    const { item, name, id , check} = route.params;
    
  const [ayah , setAyah]= React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(()=>{
    getEdition()

  },[])
  const getEdition= async ()=>{
    setLoading(true)
    const ayahs=await fetch(`http://api.alquran.cloud/v1/surah/${item}/${id}`).then((response)=>response.json()).then((data)=>data.data.ayahs);
    setAyah(ayahs)
    setLoading(false)
   }
  const play =(url)=>{
  
    try {
      // play the file tone.mp3
    
      SoundPlayer.playUrl(url)
  } catch (e) {
      console.log(`cannot play the sound file`, e)
  }

  }

  return (
    <SafeAreaView >
     
      
        <View style={styles.container}>
          <Header title={name}/>
          {loading ? (
          <ActivityIndicator
            //visibility of Overlay Loading Spinner
            visible={loading}
            //Text with the Spinner
            textContent={'Loading...'}
            //Text style of the Spinner Text
            textStyle={styles.spinnerTextStyle}
            style={{alignSelf:"center",marginTop:290}}
            size="large"
          />
        ) : (
           <FlatList
          data={ayah}
          keyExtractor={(item,index)=>{return item.number}}
          ListFooterComponentStyle={{backgroundColor:"white"}}
          renderItem={({item,index})=>(
            <View key={item.number} style={styles.container1}>
              
              <Text style={styles.englishName}>{item.text}</Text>
              {check=="audio" ?<TouchableOpacity onPress={()=>play(item.audio)}><Image source={require("../assest/audio2.png")}/></TouchableOpacity>:null}
              
           
           
            </View>
          )}/>
        )}
         
        </View>
    
    </SafeAreaView>
  );

}
export default Surah;