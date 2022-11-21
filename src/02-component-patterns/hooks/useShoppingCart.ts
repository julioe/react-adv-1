import { useState } from "react";
import { products } from "../components/data/products";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = (  ) => { 

 const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({ });  //el objeto ayuda para hacer un barrido mas facilmente
 // let valoresNuevos = Object.entries(shoppingCart);
  
 const onProductCountChange = ({ count, product}: {count: number, product: Product }) => {
   setShoppingCart( oldShoppingCart => {
    if( count === 0 ) {
      const {  [product.id]: toDelete, ...rest  } = oldShoppingCart;
      return rest;
  }

  return {
      ...oldShoppingCart,
      [ product.id ]: { ...product, count }
  }
    })
  }
        return {
            
              shoppingCart,

              onProductCountChange
        }
}