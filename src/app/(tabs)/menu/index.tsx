import { FlatList, StyleSheet,} from 'react-native';

// import EditScreenInfo from '@/src/components/EditScreenInfo';
import products from '@/assets/data/products';
import ProductItem from '@/src/components/ProductItem';
import { Stack } from 'expo-router';



export default function MenuScreen() {
  return (
    <>
    <Stack.Screen
      options={{
        title:"Menu"
      }}
    />
    <FlatList 
      data={products}  
      renderItem={({item})=><ProductItem product={item}/>}
      numColumns={2}
    />
    </>
  );
}

const styles = StyleSheet.create({

});
