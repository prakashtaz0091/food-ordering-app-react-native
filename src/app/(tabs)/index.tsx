import { FlatList, StyleSheet,} from 'react-native';

// import EditScreenInfo from '@/src/components/EditScreenInfo';
import products from '@/assets/data/products';
import ProductItem from '@/src/components/ProductItem';



export default function MenuScreen() {
  return (
    <FlatList 
      data={products}  
      renderItem={({item})=><ProductItem product={item}/>}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({

});
