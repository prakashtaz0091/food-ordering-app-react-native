import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function ProductDetailScreen() {
  const {productId} = useLocalSearchParams();
  return (
    <View>
      <Text>product {productId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})