import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Libarary = () => {
  return (
    <View >
      <Text style={styles.librarytext}>Libarary</Text>
    </View>
  )
}

export default Libarary

const styles = StyleSheet.create({
  librarytext:{
    color:'black',
  }
})