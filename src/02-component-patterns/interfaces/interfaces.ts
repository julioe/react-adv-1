import { Props as ProductButtonsProps }from '../components/ProductButtons';
import { Props as ProductCardProps }   from '../components/ProductCard';
import { Props as ProductImageProps }  from '../components/ProductImage';
import { Props as ProductTitleeProps } from '../components/ProductTitle';

export interface Product {
    id:    string;
    img?:  string;
    title: string;
}

export interface ProductContextProps {
    counter: number;   //Esta es una interfas
    product: Product;  //Esta es una interfas
    increaseBy: ( value: number ) => void;  //Este es un metodo
}


export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    Buttons:( Props: ProductButtonsProps) => JSX.Element
    Image:  ( Props: ProductImageProps )  => JSX.Element,
    Title:  ( Props: ProductTitleeProps ) => JSX.Element,
}

export interface onChangeArgs { //Argumentos que nChange va a recibir
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number
}
