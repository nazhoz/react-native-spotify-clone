import { StyleSheet, Text, View, ScrollView, Image, TextInput} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Search = () => {
  return (
    <SafeAreaView>
    <View  style={styles.searchmain}>
      <ScrollView contentContainerStyle={styles.scrollcontent}>

        <View style={styles.searchfirstpart}>          
          <Text style={styles.searchtext}>Search</Text>
          <Image source={require('./images/searchimages/camera.png')}></Image>
        </View>

        <View style={styles.searchinput}>
        <Image style={styles.searchimage} source={require('./images/searchimages/search.png')}></Image>
        <TextInput
        style={styles.input}
        />
      </View>

        <View>
        
        </View>



      </ScrollView>
    </View>

    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  searchmain:{
    backgroundColor:'black',
    height:'100%'
  },
  scrollcontent: {
    flexGrow: 1,   
  },
  searchfirstpart:{
    flexDirection:'row',
    // backgroundColor:'orange',
    justifyContent:'space-between',
    height:50,
    alignItems:'center'
  },
  searchtext:{
    fontSize:18,
    fontWeight:'800'
  },
  searchinput:{
    backgroundColor:'white',
    width:'90%',
    flexDirection:'row',
    alignItems:'center',
    marginLeft:20,
    height:40,
    borderRadius:5,
    color:'black'
  },
  input:{
    // backgroundColor:'white',
    width:'90%'
  },
  searchimage:{
    // backgroundColor:'blue',
    width:30,
    height:30,
  }
})