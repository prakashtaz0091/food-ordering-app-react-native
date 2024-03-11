import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { Product } from '@/assets/types'
import { Link, router } from 'expo-router'

export const defaultImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

type ProductItemProps = {
    product: Product;
}


export default function ProductItem({product}:ProductItemProps) {
  return (

    <Link href={`/(tabs)/menu/${product.id}`} asChild>
      <TouchableOpacity style={styles.container}>
          <Image 
          source={{uri:product.image||defaultImage}} 
          style={styles.image}
          resizeMode='contain'
          />
          <Text style={styles.title} >{product&&product.name}</Text>
          <Text style={styles.price} >${product&&product.price}</Text>
      </TouchableOpacity> 
    </Link>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        padding:10,
        borderRadius:10,
        flex:1,
        margin:3,
        maxWidth:"48%",
        elevation:3,

    
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