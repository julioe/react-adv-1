import { useState } from "react";
import { products } from "../components/data/products";
import { Product, ProductInCart } from "../interfaces/interfaces";



export const useShoppingCart = (  ) => { 

 const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({ });  //el objeto ayuda para hacer un barrido mas facilmente
 // let valoresNuevos = Object.entries(shoppingCart);
  
 const onProductCountChange = ({ count, product}: {count: number, product: Product }) => {
   setShoppingCart( oldShopingCart => {
    const productInCart: ProductInCart = oldShopingCart[product.id] || { ...product, count: 0 };
      
      if( Math.max( productInCart.count + count, 0) > 0 ) {
        productInCart.count += count;
        return {
          ...oldShopingCart,
          [product.id]: productInCart
        }
      } 
      // Borrar el producto
      const { [product.id]: toDelate, ...rest } = oldShopingCart;
    return {  ...rest  }
    
    })
  }
        return {
              products,
              shoppingCart,

              onProductCountChange
        }
}