import React from "react";
import {Text,View, TouchableOpacity,SafeAreaView,FlatList, ActivityIndicator} from 'react-native'
import Header from "../component/Header";
import styles from "../style/styles";
const Audio=({navigation})=>{
    const [quranArr , setQuranArr]= React.useState([]);
    const [loading, setLoading] = React.useState(false);

  React.useEffect(()=>{
    getEdition()

  },[])
  const getEdition= async ()=>{
    setLoading(true)
     const res= await fetch(`http://api.alquran.cloud/v1/edition/language/ar`).then((response)=>response.json()).then((data)=>data.data)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  
    const d=res.filter((item)=>item.format=="audio");

    setQuranArr(d)
    setLoading(false)

    
  }
 

  return (
    <SafeAreaView >
     
      
        <View style={styles.container}>
          <Header title={"Audio"}/>
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
          data={quranArr}
          keyExtractor={(item,index)=>{item.name}}
          renderItem={({item,index})=>(
            <View style={styles.container1}>
                <TouchableOpacity onPress={()=>{navigation.navigate("Quran",{identifier:item.identifier, name:item.name, type:"audio"})}}  style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={styles.englishName}>{item.englishName}</Text>
                <Text style={styles.Name}>{item.name}</Text>
                </TouchableOpacity>
              
              
              
           
           
            </View>
          )}/>
        )}
           
         
        </View>
    
    </SafeAreaView>
  );

}
export default Audio;