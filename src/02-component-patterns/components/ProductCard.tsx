import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";
import { createContext, CSSProperties /*ReactElement*/ } from "react";
import { InitialValues, ProductCardHandlers } from "../interfaces/interfaces";
import {
  Product,
  ProductContextProps,
  onChangeArgs,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  initialValues?: InitialValues;
  product: Product;
  style?: CSSProperties;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({
  children,
  className,
  product,
  style,
  value,
  initialValues,
  onChange,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
