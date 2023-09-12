import "./ProductCard.scss";
import { useEffect, useState } from "react";

const ProductCard = ({
  selectedProducts,
  product_name,
  product_desc,
  product_quantity,
  calories,
  total,
  setTotal,
  setProducts,
  productId,
  setIsSelectedProductsExpanded,
}) => {
  let isVisible = true;

  const incrementQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
    setTotal(total + calories);
    highlightSelected();
  };

  const decrementQuantity = (productId) => {
    if (product_quantity > 0) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
    setTotal(total - calories);
  };

  const [productSelected, setProductSelected] = useState(false);

  const highlightSelected = () => {
    setProductSelected(true);

    setTimeout(() => {
      setProductSelected(false);
    }, 500);
  };

  return (
    <div className="product-card">
      <div>
        <div className="name-calories-wrap">
          <h3 className="product_name" style={{ color: productSelected && "#CDA75C" }}>
            {product_name}
          </h3>
          <p className="product-calories" style={{ color: productSelected && "#CDA75C" }}>{calories}</p>
        </div>
        <p className="product_desc" style={{ color: productSelected && "#CDA75C" }}>{product_desc}</p>
      </div>

      <div className="button-container">
        {product_quantity === 0 ? (
          <button
          className="quantity-button"
            onClick={() => {
              incrementQuantity(productId);
            }}
          >
            +
          </button>
        ) : (
          <>
            <button
              onClick={() => decrementQuantity(productId)}
              className="quantity-button"
            >
              -
            </button>
            <h3>{product_quantity}</h3>
            <button
              onClick={() => incrementQuantity(productId)}
              className="quantity-button"
            >
              +
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
