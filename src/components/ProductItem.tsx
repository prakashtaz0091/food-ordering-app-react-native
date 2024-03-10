import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

export default function ProductItem({product}) {
  return (
    <View style={styles.container}>
        <Image source={{uri:product.image}} style={styles.image} />
        <Text style={styles.title} >{product&&product.name}</Text>
        <Text style={styles.price} >${product&&product.price}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        padding:10,
        borderRadius:10
        // borderBottomLeftRadius:10,
        // borderBottomEndRadius:10,
    
      },
      image:{
        width:"98%",
        aspectRatio:1,
      },
      title: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical:10,
        color:"black",
      },
    
      price:{
        color:Colors.light.tint,
      },
})