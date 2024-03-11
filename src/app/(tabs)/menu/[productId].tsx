import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@/assets/data/products';
import Colors from '@/src/constants/Colors';
import { defaultImage } from '@/src/components/ProductItem';

export default function ProductDetailScreen() {
  const {productId} = useLocalSearchParams();

  const product = products.filter((product)=>(product.id).toString()===productId)[0]

  return (
    <>
       <Stack.Screen 
            options={{
                title:`${product.name}`
            }}
        />
      <View style={styles.container}>
          <Image 
          source={{uri:product.image||defaultImage}} 
          style={styles.image}
          resizeMode='contain'
          />
          <Text style={styles.title} >{product&&product.name}</Text>
          <Text style={styles.price} >${product&&product.price}</Text>
      </View> 
    </>
  )
}


const styles = StyleSheet.create({
  container: {
      backgroundColor:"white",
      padding:10,
      borderRadius:10,
      flex:1,
      margin:3,
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