import React,{useState,useEffect} from "react";
import { Text,View , FlatList, TouchableOpacity,ActivityIndicator} from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "../style/styles";
import Header from "../component/Header";
const Languages=({navigation})=>{
  const [country, setCountry] = useState('ur');
  const [loading, setLoading] = React.useState(false);
  const [data, setData]=useState("")
  useEffect(()=>{
    getContent()

  },[country])
  const getContent=async()=>{
    setLoading(true)
    const res= await fetch(`http://api.alquran.cloud/v1/edition/language/${country}`).then((response)=>response.json()).then((data)=>data.data)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    const dat=res.filter((item)=>item.type!="quran");
    setData(dat)
    setLoading(false)
      
  }

  return(
    <View style={styles.container}>
      <Header title={"Translation"}/>
      
      
      <Text style={{color:"#105278"}}>Languages</Text>
      <Picker
        selectedValue={country}
        onValueChange={(value, index) => setCountry(value)}
        mode="dropdown" // Android only
        style={{borderColor:"#18313f", borderWidth:8, color:"#105278"}}
       
      >
       
        <Picker.Item label="Arabic" value="ar" />
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Urdu" value="ur" />
        <Picker.Item label="Azerbaijani" value="az" />
        <Picker.Item label="Bengali" value="bn" />
        <Picker.Item label="Czech" value="cs" />
        <Picker.Item label="German" value="de" />
        <Picker.Item label="Dhivehi" value="dv" />
        <Picker.Item label="Spanish" value="es" />
        <Picker.Item label="Persian" value="fa" />
        <Picker.Item label="French" value="fr" />
        <Picker.Item label="Hausa" value="ha" />
        <Picker.Item label="Hindi" value="hi" />
        <Picker.Item label="Indonesian" value="id" />
        <Picker.Item label="Japanese" value="ja" />
        <Picker.Item label="Korean" value="ko" />
        <Picker.Item label="kurdish" value="ku"/>
        <Picker.Item label="MALI" value="ml"/>
        <Picker.Item label="Dutch" value="nl"/>
        <Picker.Item label="Norwegian" value="no"/>
        <Picker.Item label="Polish" value="pl"/>
        <Picker.Item label="Portuguese" value="pt"/>
        <Picker.Item label="romany" value="ro"/>
        <Picker.Item label="Russian" value="ru"/>
        <Picker.Item label="Albanian" value="sq" />
        <Picker.Item label="Swedish" value="sv"/>
        <Picker.Item label="tamil" value="ta"/>
        <Picker.Item label="Tajik" value="tg" />
        <Picker.Item label="Thai" value="th"/>
        <Picker.Item label="Turkish" value="tr"/>
        <Picker.Item label="	Uzbek" value="uz"/>
  
      </Picker>
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
          style={{ paddingBottom: 90 }}
          ListFooterComponentStyle={{paddingBottom:200}}
          data={data}
          keyExtractor={(item,index)=>{item.name}}
          renderItem={({item,index})=>(
            <View style={styles.container1}>
            <TouchableOpacity style={{flexDirection:"row", justifyContent:"space-between"}} onPress={()=>{navigation.navigate("Quran",{identifier:item.identifier, name:item.englishName,type:item.format})}}>
            
             
              <Text style={styles.englishName}>{item.englishName}</Text>
              <Text style={styles.Name}>{item.format}</Text>
              </TouchableOpacity>
            
            
            
         
         
          </View>
      )}/>

        )
      }
     
    </View>
  )

}
export default Languages