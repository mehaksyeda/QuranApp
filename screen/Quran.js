import React from "react";
import {Text,View, TouchableOpacity,SafeAreaView,FlatList,ActivityIndicator} from 'react-native'
import styles from "../style/styles";
import Header from "../component/Header";
const Quran=({ route, navigation })=>{
  const [loading, setLoading] = React.useState(false);
    const [quranArr , setQuranArr]= React.useState([]);
    const {identifier, name , type} = route.params;
  
  React.useEffect(()=>{
    const getEdition= async ()=>{
      setLoading(true)
      const res = await fetch(`http://api.alquran.cloud/v1/quran/${identifier}`).then((response)=>response.json()).then((data)=>data.data.surahs);
      setQuranArr(res);
      setLoading(false)
      }
     getEdition()

  },[])
  

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
          data={quranArr}
          keyExtractor={(item,index)=>{return item.number}}
          
          renderItem={({item,index})=>(
            <View key={item.num} style={styles.container1}>
                <TouchableOpacity onPress={()=>{navigation.navigate("Surah",{item:item.number, name :item.name, id:identifier, check:type})}} style={{flexDirection:"row", justifyContent:"space-between"}}>
               
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
export default Quran;