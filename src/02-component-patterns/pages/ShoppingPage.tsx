import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../components/data/products";

import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />

      <ProductCard
        product={product}
        key={product.id}
        className="bg-dark text-white"
        initialValues={{
          count: 6,
          maxCount: 10,
        }}
      >
        {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-bottoms" />

            <button onClick={reset}>reset </button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(+2)}>+2</button>
            )}

            <span>
              {count} / {maxCount}
            </span>

            {/* {JSON.stringify(args, null, 3)} */}
          </>
        )}
      </ProductCard>
    </div>
  );
};
