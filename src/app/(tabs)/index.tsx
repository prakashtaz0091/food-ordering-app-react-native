import { StyleSheet,} from 'react-native';

// import EditScreenInfo from '@/src/components/EditScreenInfo';
import { View } from '@/src/components/Themed';
import products from '@/assets/data/products';
import ProductItem from '@/src/components/ProductItem';



export default function MenuScreen() {
  return (
    <View>
      {products.map((product)=>{
        return(
          <ProductItem key={product.id} product={product} />
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({

});
