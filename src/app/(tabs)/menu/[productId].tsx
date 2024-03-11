import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@/assets/data/products';
import Colors from '@/src/constants/Colors';
import { defaultImage } from '@/src/components/ProductItem';


const sizes = ['S','M','L','XL']


export default function ProductDetailScreen() {
  const {productId} = useLocalSearchParams();

  const [selectedSize,setSelectedSize] = useState(sizes[0])


  const product = products.find((product)=>(product.id).toString()===productId) 


  function selectPizzaSize(seletedSize:string) {
    setSelectedSize(seletedSize)
  }


  if(!product){
    return <Text>Product not available</Text>
  }

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
          <Text style={styles.text}>Select Size:</Text>
            <View style={styles.rowContainer}>
              {sizes.map(size=>{
                return(
                  <TouchableOpacity 
                    key={size} 
                    style={[styles.sizeBlock, size===selectedSize&&styles.sizeSelectedColor]} 
                    onPress={()=>selectPizzaSize(size)}
                    >

                  <Text style={[styles.sizeText, size===selectedSize&&styles.selectedSizeTextColor ]} >{size}</Text>
                  </TouchableOpacity>
                )
              })}
            </View>
          <Text style={styles.price} >${sizes.indexOf(selectedSize)+product.price}</Text>
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
      fontSize:18,
      color:Colors.light.tint,
      fontWeight:"500"
    },
    text:{
      paddingVertical:10,
      // color:Colors.light.tint,
      fontWeight:"600",
    }
    ,
    rowContainer:{
      padding:5,
      flexDirection:"row",
      justifyContent:"space-around"
    },
    sizeBlock:{
      padding:5,
      width:50,
      aspectRatio:1,
      borderRadius:25,
      alignItems:"center",
      justifyContent:"center",
    
    },
    sizeText:{
      fontSize:20,
      fontWeight:"500",
      color:"gray"
    },
    sizeSelectedColor:{
      backgroundColor:"gainsboro",
      elevation:3


    },
    selectedSizeTextColor:{
      color:"black"
    }

})