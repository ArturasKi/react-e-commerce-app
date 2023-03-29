import { useContext } from "react";
import AppContext from "./AppContext.jsx";
import ProductMens from "./ProductMens.jsx";

function ProductsMensSale() {
  const { products } = useContext(AppContext);

  return (
    <div className="pr-container">
      {products.map((product) =>
        product.sale === 1 ? (
          <ProductMens key={product.id} product={product} />
        ) : null
      )}
    </div>
  );
}

export default ProductsMensSale;
