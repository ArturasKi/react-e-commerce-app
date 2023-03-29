import { useContext } from "react";
import AppContext from "./AppContext";
import ProductMens from "./ProductMens";

function ProductsWomens() {
  const { products } = useContext(AppContext);

  return (
    <div className="pr-container">
      {products.map((product) =>
        product.id > 50 ? (
          <ProductMens key={product.id} product={product} />
        ) : null
      )}
    </div>
  );
}

export default ProductsWomens;
