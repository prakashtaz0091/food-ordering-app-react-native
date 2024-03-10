import { StyleSheet, Image } from 'react-native';

// import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';

const product = products[0]

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{uri:product.image}} style={styles.image} />
      <Text style={styles.title} >{product&&product.name}</Text>
      <Text style={styles.price} >${product&&product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    padding:10,
    borderBottomLeftRadius:10,
    borderBottomEndRadius:10,
    
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
});
