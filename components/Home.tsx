import { StyleSheet,SafeAreaView,Image, Text, View, ScrollView } from 'react-native'
import React from 'react'


const Home = () => {
  return (
    <SafeAreaView>
     <ScrollView contentContainerStyle={styles.scrollcontent} >
    <View style={styles.main} >

    <View style={styles.head}>

        <View style={styles.headpartone}>
        <Text style={styles.headtext}>Spotify</Text>
        </View>

        <View style={styles.headparttwo}>
        <Image source={require('./images/bell.png')}></Image>
        <Image source={require('./images/history.png')}></Image>
        <Image source={require('./images/setting.png')}></Image>
        </View>
    </View>

    <View style={styles.firstbody}>
        <View style={styles.firstbodypartone}>
        <Text>Music</Text>
        </View>
        <View style={styles.firstbodyparttwo}>
            <Text>Podcast & Shows</Text>
        </View>
    </View>

    <View style={styles.playitems}>

        <View style={styles.musicitem}>
            <View style={styles.likedsongs} >
                <Image style={styles.imagelike} source={require('./images/download.jpeg')}></Image>
                <Text style={styles.playitemtext}>Liked Songs</Text>
            </View>
            <View style={styles.likedsongs}>
                <Image style={styles.imagelike} source={require('./images/an.jpg')}></Image>
                <Text style={styles.playitemtexttwo}>This is Anirudh</Text>
            </View>
        </View>

        <View style={styles.musicitem}>
            <View style={styles.likedsongs} >
                <Image style={styles.imagelike} source={require('./images/jailer.jpeg')}></Image>
                <Text style={styles.playitemtext}>Jailer (OST)</Text>
            </View>
            <View style={styles.likedsongs}>
                <Image style={styles.imagelike} source={require('./images/ar.jpg')}></Image>
                <Text style={styles.playitemtexttwo}>Ar Specials</Text>
            </View>
        </View>

        <View style={styles.musicitem}>
            <View style={styles.likedsongs} >
                <Image style={styles.imagelike} source={require('./images/jawan.jpeg')}></Image>
                <Text style={styles.playitemtext}>Jawan songs</Text>
            </View>
            <View style={styles.likedsongs}>
                <Image style={styles.imagelike} source={require('./images/leo.jpeg')}></Image>
                <Text style={styles.playitemtexttwo}>Bloody Sweet</Text>
            </View>
        </View>
    </View>

     {/* --------------------first image containeer---------- */}

    <View style={styles.trysomethingelsebody}>
        <View >
            <Text style={styles.tryhead}>Try something else</Text>           
        </View>  
        <ScrollView horizontal>  

            <View style={styles.tryimagecontainer}>     
            <Image style={styles.trysomethingimages} source={require('./images/latest/latest.jpeg')}></Image>
            <Text style={styles.trytext}>Latest Tamil Hits</Text> 
            </View>

            <View style={styles.tryimagecontainer}>     
            <Image style={styles.trysomethingimages} source={require('./images/latest/kollywoodcream.jpeg')}></Image>
            <Text style={styles.trytext}>Kollywood Cream</Text> 
            </View> 

            <View style={styles.tryimagecontainer}>     
            <Image style={styles.trysomethingimages} source={require('./images/latest/hothits.jpeg')}></Image>
            <Text style={styles.trytext}>Hot Tamil Hits</Text> 
            </View>

            <View style={styles.tryimagecontainer}>     
            <Image style={styles.trysomethingimages} source={require('./images/latest/kollychillout.jpeg')}></Image>
            <Text style={styles.trytext}>Kolly Chill Out</Text> 
            </View>

            <View style={styles.tryimagecontainer}>     
            <Image style={styles.trysomethingimages} source={require('./images/latest/tamilromance.jpeg')}></Image>
            <Text style={styles.trytext}>Tamil Romance</Text> 
            </View>

            <View style={styles.tryimagecontainer}>     
            <Image style={styles.trysomethingimages} source={require('./images/latest/trendingmalayalam.jpeg')}></Image>
            <Text style={styles.trytext}>Trending Now Malayalam</Text> 
            </View> 

            <View style={styles.tryimagecontainer}>     
            <Image style={styles.trysomethingimages} source={require('./images/latest/dhanushhits.jpeg')}></Image>
            <Text style={styles.trytext}>Dhanush Hits</Text> 
            </View>  

            <View style={styles.tryimagecontainer}>     
            <Image style={styles.trysomethingimages} source={require('./images/latest/trendingnow.jpeg')}></Image>
            <Text style={styles.trytext}>Trending Now tamil</Text> 
            </View>       

            </ScrollView>
                
    </View>
        
 {/* --------------------second image containeer---------- */}

    <View style={styles.trysomethingelsebody}>
        <View >
            <Text style={styles.tryhead}>Best of Artists</Text>           
        </View>  
        <ScrollView horizontal>  

            <View style={styles.tryimagecontainer}>     
            <Image style={styles.trysomethingimages} source={require('./images/artist/ani.jpeg')}></Image>
            <Text style={styles.trytext}>This is Anirudh</Text> 
            </View>

            <View style={styles.tryimagecontainer}>     
            <Image style={styles.trysomethingimages} source={require('./images/artist/arjit.jpeg')}></Image>
            <Text style={styles.trytext}>This is Arjit</Text> 
            </View> 

            <View style={styles.tryimagecontainer}>     
            <Image style={styles.trysomethingimages} source={require('./images/artist/arrahman.jpg')}></Image>
            <Text style={styles.trytext}>This is Ar Rahman</Text> 
            </View>

            <View style={styles.tryimagecontainer}>     
            <Image style={styles.trysomethingimages} source={require('./images/artist/bebe.jpg')}></Image>
            <Text style={styles.trytext}>This is Bebe Rexa</Text> 
            </View>

            <View style={styles.tryimagecontainer}>     
            <Image style={styles.trysomethingimages} source={require('./images/artist/dhanush.jpg')}></Image>
            <Text style={styles.trytext}>This is Dhanush</Text> 
            </View>

            <View style={styles.tryimagecontainer}>     
            <Image style={styles.trysomethingimages} source={require('./images/artist/dualipa.jpeg')}></Image>
            <Text style={styles.trytext}>This is Dua Lipa</Text> 
            </View> 

            <View style={styles.tryimagecontainer}>     
            <Image style={styles.trysomethingimages} source={require('./images/artist/eminem.jpg')}></Image>
            <Text style={styles.trytext}>This is Eminem</Text> 
            </View>  

            <View style={styles.tryimagecontainer}>     
            <Image style={styles.trysomethingimages} source={require('./images/artist/yuvan.jpg')}></Image>
            <Text style={styles.trytext}>This is Yuvan</Text> 
            </View>       

            </ScrollView>
                
    </View>


    </View>
    </ScrollView>
    </SafeAreaView>
)
}

export default Home

const styles = StyleSheet.create({
main :{
    backgroundColor:'black',
    width:'100%',
    flex:1,    
    height:750,
   
},
scrollcontent: {
    flexGrow: 1,   
  },
head :{   
    width:'100%',
    height:'10%',
    // backgroundColor:'darkblue',
    display:'flex',
    flexDirection:'row'
},
headtext:{
    fontSize:27,
    display:'flex',
    fontWeight:'900',
    // backgroundColor:'red',
    width:'100%',
    color:'lightgreen' 
},
headpartone:{
  // backgroundColor:'violet',
    width:'55%',
    alignItems:'center',
    justifyContent:'center'    
},
headparttwo:{
    width:'45%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
},
firstbody:{
    // backgroundColor:'green',
    height:'7%',
    width:'70%',  
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'      
},
firstbodypartone:{
    backgroundColor:'rgb(46, 46, 31)',
    width:70,
    height:25,
    alignItems:'center',
    
},
firstbodyparttwo:{
    backgroundColor:'rgb(46, 46, 31)',
    width:150,
    height:25,
    alignItems:'center'
},
imagelike:{
    width:50,
    height:50
},
likedsongs:{
    width:'45%',
    backgroundColor:'rgb(46, 46, 31)',
    flexDirection:'row',
    borderWidth:1,
    borderColor:'rgb(46, 46, 31)',
    borderRadius:7,
    justifyContent:'space-between',
    alignItems:'center',
},
musicitem:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-around',
    alignItems:'center',
},
playitems:{
    width:'100%',
    // alignItems:'flex-start',
    // backgroundColor:'blue',
    height:'28%',
    gap:5,
    // justifyContent:'space-around'
},
playitemtext:{
    // backgroundColor:'yellow',
    width:'60%',
},
playitemtexttwo:{
    width:'65%'
},


// ---------------------imagecontainer css ---------------------------------

trysomethingimages:{
    width:140,
    height:140
},
trysomethingelsebody: {
   
    // backgroundColor:'yellow',
    height:'35%',
},
tryimagecontainer:{
    marginRight:10,
    // backgroundColor:'lightblue',
    height:195,
    alignItems:'center',
    justifyContent:'space-evenly'
},
tryhead:{
    fontSize:20,
    // backgroundColor:'yellow',
    height:40, 
    fontWeight:'800',
    color:'white'
},
trytext:{
    color:'white',
    fontStyle:'italic',
    fontWeight:'600'
}
})