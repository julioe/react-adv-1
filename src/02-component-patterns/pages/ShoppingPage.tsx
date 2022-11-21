import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import {useShoppingCart} from '../hooks/useShoppingCart';
//import { Product,  } from '../interfaces/interfaces';
import '../styles/custom-styles.css'
//import { useState } from 'react';
import { products } from '../components/data/products';



export const ShoppingPage = () => {
   
          const {  shoppingCart,  onProductCountChange } = useShoppingCart()
        
    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

         {
            products.map( product => (   
               <ProductCard 
                    key={product.id}
                    product={ product }
                    className='bg-dark  text-white' 
                    
                    onChange={onProductCountChange}
                   value={ shoppingCart[product.id]?.count || 0 }
                    
                    style={{
                        boxShadow:'10px 10px 10px rgba(0,0,0,0.2)',
                    }}
                >
                    <ProductImage 
                       className="custom-image"
                     style={{
                        boxShadow:'10px 10px 10px rgba(0,0,0,0.2)',
                    }}
                      />
                      
                    <ProductTitle  />
                    <ProductButtons 
                    className="custom-buttons" />
                </ProductCard>
               
            ))
         }                                
            </div>
        

           <div className='shoping-cart' >
              { //Carrito de compras
                Object.entries(shoppingCart).map( ([ key, product ]) => (
                  <ProductCard 
                  
                  key={key}
                  product={ product }
                  onChange={onProductCountChange}
                  className='bg-dark  text-white' 
                  style={{ width:'100px', boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}}
                  value={product.count}
                  >
                      <ProductImage 
                       className="custom-image"
                       style={{
                          boxShadow:'10px 10px 10px rgba(0,0,0,0.2)',
                      }}
                        />
                      <ProductButtons 
                      className="custom-buttons" 
                      style={{
                        display: 'flex',
                        justifyContent: 'center'
                      
                      }}
                      />
                  </ProductCard>
                )  )
              }          
            </div>
        </div>
    )
}
